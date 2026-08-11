export const config = {
  api: {
    // Increase the response size limit for long AI-generated content
    responseLimit: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { endpoint, payload } = req.body;
  
  if (!endpoint || !payload) {
    return res.status(400).json({ message: 'Missing endpoint or payload' });
  }

  try {
    // We proxy the request to the Python backend
    // In production, process.env.NEXT_PUBLIC_CREW_BACKEND_URL would be set to the Render/Railway URL.
    // For local development, it defaults to localhost:8000
    const backendUrl = process.env.NEXT_PUBLIC_CREW_BACKEND_URL || 'http://127.0.0.1:8000';
    
    // Use AbortController for a generous 3-minute timeout (AI agents can be slow)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 180000);

    const response = await fetch(`${backendUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Backend Error: ${response.status} - ${errorData}`);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Crew API Proxy: Request timed out after 3 minutes');
      return res.status(504).json({ message: 'Request timed out. AI agents can be slow — please try again.' });
    }
    console.error("Crew API Proxy Error:", error);
    return res.status(500).json({ message: error.message || 'Internal Server Error' });
  }
}
