export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { code, language, query, history, apiKey, llmProvider } = req.body;
  
  if (!query) {
    return res.status(400).json({ message: 'Missing query' });
  }

  try {
    const backendUrl = process.env.NEXT_PUBLIC_CREW_BACKEND_URL || 'http://127.0.0.1:8000';
    
    // We forward the exact same payload to the Python IDE agent route
    const response = await fetch(`${backendUrl}/api/ide-agent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: code || "",
        language: language || "",
        query: query,
        history: history || [],
        apiKey: apiKey || null,
        llm_provider: llmProvider || "gemini"
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Backend Error: ${response.status} - ${errorData}`);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("IDE Agent Proxy Error:", error);
    return res.status(500).json({ message: error.message || 'Internal Server Error' });
  }
}
