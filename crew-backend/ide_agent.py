from langchain_core.messages import SystemMessage, HumanMessage, AIMessage
from langchain_core.tools import tool
from langgraph.prebuilt import create_react_agent
from llm_factory import get_llm
import os
import pydantic

class RunCodeInput(pydantic.BaseModel):
    tool_language: str
    tool_code: str
    tool_stdin: str = ""

def run_ide_agent(code: str, language: str, query: str, history: list, api_key: str = None, provider: str = "gemini") -> str:
    llm = get_llm(provider=provider, custom_api_key=api_key)
    execution_llm = get_llm(provider=provider, temperature=0, custom_api_key=api_key)

    @tool("run_code", args_schema=RunCodeInput)
    def run_code_tool(tool_language: str, tool_code: str, tool_stdin: str = "") -> str:
        """Compiles and executes the provided code. Returns the standard output or standard error. Use this to test code or debug."""
        prompt = f"""You are a highly accurate, strict code execution engine.
Your task is to mentally compile and run the following code written in {tool_language}.
If the code has compilation errors or runtime errors, you MUST output the exact error message that a standard compiler/interpreter would output (e.g. standard stderr).
If the code runs successfully, you MUST output ONLY the exact standard output (stdout) that the program would produce.
You MUST consider the provided Custom Input (stdin) while executing the code.

Rules:
1. DO NOT include markdown formatting (like ```).
2. DO NOT include explanations, greetings, or conversational text.
3. OUTPUT ONLY the exact stdout or stderr.

=== Custom Input (stdin) ===
{tool_stdin or '(No input provided)'}
============================

=== Source Code ===
{tool_code}
===================
"""
        result = execution_llm.invoke(prompt)
        return result.content

    tools = [run_code_tool]
    app = create_react_agent(llm, tools=tools)

    system_prompt = SystemMessage(
        content=f"""You are an expert programming assistant integrated into an online IDE. 
The user is currently writing code in {language or 'unknown language'}. 
Here is their current code context:
```{language or 'text'}
{code or ''}
```
Answer their question concisely and accurately based on the code provided. 
If you need to verify your solution, debug the user's code, or predict the output, you can use the 'run_code' tool to compile and execute the code."""
    )

    messages = [system_prompt]
    
    if history:
        for msg in history:
            if msg.get("role") == "user":
                messages.append(HumanMessage(content=msg.get("content")))
            elif msg.get("role") == "assistant":
                messages.append(AIMessage(content=msg.get("content")))
                
    messages.append(HumanMessage(content=query))

    result = app.invoke({"messages": messages})
    
    # The last message should be the AI response
    last_msg = result["messages"][-1]
    return last_msg.content
