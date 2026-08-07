import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage } from "@langchain/core/messages";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { language, files, stdin, apiKey } = req.body;
  const code = files && files[0] ? files[0].content : '';

  const finalApiKey = apiKey || process.env.GOOGLE_API_KEY;

  if (!finalApiKey) {
    return res.status(500).json({ message: 'No GOOGLE_API_KEY provided in request or environment.' });
  }

  try {
    const llm = new ChatGoogleGenerativeAI({
      model: "gemini-3.5-flash",
      apiKey: finalApiKey,
      temperature: 0, // strict evaluation
    });

    const prompt = new HumanMessage(`
You are a highly accurate, strict code execution engine.
Your task is to mentally compile and run the following code written in ${language}.
If the code has compilation errors or runtime errors, you MUST output the exact error message that a standard compiler/interpreter would output (e.g. standard stderr).
If the code runs successfully, you MUST output ONLY the exact standard output (stdout) that the program would produce.
You MUST consider the provided Custom Input (stdin) while executing the code.

Rules:
1. DO NOT include markdown formatting (like \`\`\`).
2. DO NOT include explanations, greetings, or conversational text.
3. OUTPUT ONLY the exact stdout or stderr.

=== Custom Input (stdin) ===
${stdin || '(No input provided)'}
============================

=== Source Code ===
${code}
===================
    `);

    const result = await llm.invoke([prompt]);
    
    // Simulate Piston API response format so the frontend doesn't need to change
    res.status(200).json({
      run: {
        stdout: result.content,
        stderr: ''
      }
    });

  } catch (error) {
    console.error('Error in AI execution simulation:', error);
    res.status(500).json({ 
      message: 'Failed to execute code', 
      error: error.message 
    });
  }
}
