// api/generate.js — Vercel Serverless Function for Quizzie
// Securely proxies quiz generation requests to Groq using the server-side GROQ_API_KEY environment variable.

module.exports = async function handler(req, res) {
  // CORS Headers for flexible cross-origin or local previews
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  // Retrieve Groq API Key from Vercel Environment Variables
  const apiKey = (process.env.GROQ_API_KEY || '').trim();
  if (!apiKey || apiKey === 'YOUR_GROQ_API_KEY_HERE') {
    return res.status(500).json({
      error: 'GROQ_API_KEY is not configured in Vercel Environment Variables.\n\nTo fix this:\n1. Open your Vercel Dashboard -> Project Settings -> Environment Variables.\n2. Add GROQ_API_KEY with your Groq API key (gsk_...).\n3. Redeploy your project.'
    });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      return res.status(400).json({ error: 'Malformed JSON request body.' });
    }
  }

  const { messages, model = 'openai/gpt-oss-120b' } = body || {};

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Missing or invalid "messages" array in request body.' });
  }

  async function requestGroq(selectedModel) {
    return await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: selectedModel,
        messages: messages,
        temperature: 0.7,
        max_tokens: 4096,
        response_format: { type: 'json_object' }
      })
    });
  }

  try {
    let response = await requestGroq(model);

    // If 120b is rate-limited (429), attempt automatic fallback to 20b
    if (response.status === 429 && model.includes('120b')) {
      console.warn('Groq 120b rate-limited; attempting fallback to 20b...');
      response = await requestGroq('openai/gpt-oss-20b');
    }

    if (!response.ok) {
      let errText = '';
      try {
        const errJson = await response.json();
        errText = errJson.error?.message || response.statusText;
      } catch (e) {
        errText = response.statusText;
      }

      if (response.status === 401) {
        return res.status(401).json({
          error: 'Invalid Groq API Key in Vercel. Please verify your GROQ_API_KEY in Vercel Project Settings -> Environment Variables.'
        });
      }

      return res.status(response.status).json({
        error: `Groq API Error (${response.status}): ${errText}`
      });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      error: error.message || 'Internal server error while contacting Groq AI.'
    });
  }
};
