import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { SystemMessage, HumanMessage } from "@langchain/core/messages";
import { tool } from "@langchain/core/tools";
import { z } from "zod";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { code, language, query, history, apiKey } = req.body;

  const finalApiKey = apiKey || process.env.GOOGLE_API_KEY;

  if (!finalApiKey) {
    return res.status(500).json({ message: 'No GOOGLE_API_KEY provided in request or environment.' });
  }

  try {
    const llm = new ChatGoogleGenerativeAI({
      model: "gemini-3.5-flash",
      apiKey: finalApiKey,
    });

    const executionLlm = new ChatGoogleGenerativeAI({
      model: "gemini-3.5-flash",
      apiKey: finalApiKey,
      temperature: 0,
    });

    const runCodeTool = tool(async ({ tool_language, tool_code, tool_stdin }) => {
      const prompt = new HumanMessage(`
You are a highly accurate, strict code execution engine.
Your task is to mentally compile and run the following code written in ${tool_language}.
If the code has compilation errors or runtime errors, you MUST output the exact error message that a standard compiler/interpreter would output (e.g. standard stderr).
If the code runs successfully, you MUST output ONLY the exact standard output (stdout) that the program would produce.
You MUST consider the provided Custom Input (stdin) while executing the code.

Rules:
1. DO NOT include markdown formatting (like \`\`\`).
2. DO NOT include explanations, greetings, or conversational text.
3. OUTPUT ONLY the exact stdout or stderr.

=== Custom Input (stdin) ===
${tool_stdin || '(No input provided)'}
============================

=== Source Code ===
${tool_code}
===================
      `);
      const result = await executionLlm.invoke([prompt]);
      return result.content;
    }, {
      name: "run_code",
      description: "Compiles and executes the provided code. Returns the standard output or standard error. Use this to test code or debug.",
      schema: z.object({
        tool_language: z.string().describe("The programming language (e.g., python, javascript, cpp, java)"),
        tool_code: z.string().describe("The source code to execute"),
        tool_stdin: z.string().optional().describe("Standard input for the code execution")
      })
    });

    const tools = [runCodeTool];
    const app = createReactAgent({ llm, tools });

    const systemPrompt = new SystemMessage(
      `You are an expert programming assistant integrated into an online IDE. 
      The user is currently writing code in ${language || 'unknown language'}. 
      Here is their current code context:
      \`\`\`${language || 'text'}
      ${code || ''}
      \`\`\`
      Answer their question concisely and accurately based on the code provided. 
      If you need to verify your solution, debug the user's code, or predict the output, you can use the 'run_code' tool to compile and execute the code.`
    );
    
    let initialMessages = [systemPrompt];
    if (history && history.length > 0) {
        history.forEach(msg => {
            if (msg.role === 'user') {
                initialMessages.push(new HumanMessage(msg.content));
            }
        });
    }
    
    initialMessages.push(new HumanMessage(query));

    const result = await app.invoke({ messages: initialMessages });
    
    // The last message is the AI response
    const aiMessage = result.messages[result.messages.length - 1];

    res.status(200).json({ reply: aiMessage.content });
  } catch (error) {
    console.error('Error invoking agent:', error);
    res.status(500).json({ message: 'Failed to process request with AI Agent.', error: error.message });
  }
}
