import os
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_groq import ChatGroq
from langchain_cohere import ChatCohere
from crewai import LLM

# Used by CrewAI Agents (requires crewai.LLM, not langchain ChatModel)
def get_crewai_llm(provider: str = "gemini", temperature: float = 0.7, custom_api_key: str = None):
    provider = provider.lower()
    if provider == "groq":
        api_key = custom_api_key or os.environ.get("GROQ_API_KEY")
        if not api_key:
            raise ValueError("Groq API Key is missing. Provide it in .env or via the UI.")
        os.environ["GROQ_API_KEY"] = api_key
        # llama-3.1-8b-instant is free on Groq's free tier
        return LLM(model="groq/llama-3.1-8b-instant", temperature=temperature, api_key=api_key)
    elif provider == "cohere":
        api_key = custom_api_key or os.environ.get("COHERE_API_KEY")
        if not api_key:
            raise ValueError("Cohere API Key is missing. Provide it in .env or via the UI.")
        os.environ["COHERE_API_KEY"] = api_key
        # command-r is free on Cohere's free tier
        return LLM(model="cohere/command-r", temperature=temperature, api_key=api_key)
    else:  # gemini (default)
        api_key = custom_api_key or os.environ.get("GOOGLE_API_KEY")
        if not api_key:
            raise ValueError("Google API Key is missing. Provide it in .env or via the UI.")
        os.environ["GEMINI_API_KEY"] = api_key
        # gemini-1.5-flash is free on Google AI Studio free tier
        return LLM(model="gemini/gemini-flash-latest", temperature=temperature, api_key=api_key)


# Used by LangGraph IDE Agent (requires langchain ChatModel)
def get_llm(provider: str = "gemini", temperature: float = 0.7, custom_api_key: str = None):
    provider = provider.lower()

    if provider == "groq":
        api_key = custom_api_key or os.environ.get("GROQ_API_KEY")
        if not api_key:
            raise ValueError("Groq API Key is missing. Provide it in .env or via the UI.")
        return ChatGroq(
            model="llama-3.1-8b-instant",
            temperature=temperature,
            api_key=api_key
        )
    elif provider == "cohere":
        api_key = custom_api_key or os.environ.get("COHERE_API_KEY")
        if not api_key:
            raise ValueError("Cohere API Key is missing. Provide it in .env or via the UI.")
        return ChatCohere(
            model="command-r",
            temperature=temperature,
            cohere_api_key=api_key
        )
    else:  # gemini (default)
        api_key = custom_api_key or os.environ.get("GOOGLE_API_KEY")
        if not api_key:
            raise ValueError("Google API Key is missing. Provide it in .env or via the UI.")
        return ChatGoogleGenerativeAI(
            model="gemini-flash-latest",
            temperature=temperature,
            google_api_key=api_key
        )
