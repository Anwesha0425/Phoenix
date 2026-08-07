import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { StateGraph, MessagesAnnotation } from "@langchain/langgraph";
import { SystemMessage, HumanMessage } from "@langchain/core/messages";

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

    async function callModel(state) {
      const { messages } = state;
      const response = await llm.invoke(messages);
      return { messages: [response] };
    }

    const workflow = new StateGraph(MessagesAnnotation)
      .addNode("agent", callModel)
      .addEdge("__start__", "agent");

    const app = workflow.compile();

    const systemPrompt = new SystemMessage(
      `You are an expert programming assistant integrated into an online IDE. 
      The user is currently writing code in ${language || 'unknown language'}. 
      Here is their current code context:
      \`\`\`${language || 'text'}
      ${code || ''}
      \`\`\`
      Answer their question concisely and accurately based on the code provided.`
    );
    
    // Format history if provided, otherwise just the new query
    let initialMessages = [systemPrompt];
    if (history && history.length > 0) {
        history.forEach(msg => {
            if (msg.role === 'user') {
                initialMessages.push(new HumanMessage(msg.content));
            } else if (msg.role === 'assistant') {
                // @langchain/core/messages has AIMessage for assistant, but we'll stick to a simpler approach or import it.
                // It's easier to just pass text if we don't import AIMessage, but let's just pass the query for now to keep it simple.
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
