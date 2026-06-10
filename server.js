const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for frontend development server
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174', 'http://127.0.0.1:5173', 'http://127.0.0.1:5174']
}));

// Increase JSON payload limit to handle base64 image uploads
app.use(express.json({ limit: '15mb' }));

// Health Check Endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        apiKeyConfigured: !!process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY_HERE'
    });
});

// Image Scan Endpoint
app.post('/api/scan', async (req, res) => {
    const { image } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey || apiKey === 'YOUR_GEMINI_API_KEY_HERE') {
        console.error('[Error] Gemini API key is missing or not configured in .env');
        return res.status(500).json({
            error: 'API key not configured',
            message: 'Please set a valid GEMINI_API_KEY in your local .env file.'
        });
    }

    if (!image) {
        return res.status(400).json({
            error: 'Missing file data',
            message: 'No image data was provided in the request body.'
        });
    }

    try {
        console.log('[System] Received image scan request. Processing image bytes...');
        
        // Extract base64 parts from data URL
        const matches = image.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,(.+)$/);
        
        if (!matches || matches.length !== 3) {
            return res.status(400).json({
                error: 'Invalid format',
                message: 'Image must be a valid base64 data URL (e.g. data:image/jpeg;base64,...)'
            });
        }

        const mimeType = matches[1];
        const base64Data = matches[2];

        console.log(`[System] Extracted MimeType: ${mimeType}, Size: ${Math.round(base64Data.length / 1024)} KB. Contacting Gemini...`);

        // Prepare instructions prompt for bilingual output
        const promptText = `
You are an expert cultural heritage historian, archaeologist, and smart tourism assistant.
Analyze the provided image and identify the historical monument, landmark, or heritage site.

You MUST respond with a valid, clean JSON object matching the following structure in both English (en) and Hindi (hi). 
Ensure your text is highly detailed, engaging, and suitable for hackathon presentation.

The JSON schema you MUST follow:
{
  "confidence": number, // A confidence match score between 0 and 100 representing how sure you are about the monument identification
  "en": {
    "name": string, // Monument Name (e.g. "Taj Mahal")
    "history": string, // Detailed historical background, who built it, when, and the history behind it
    "architecture": string, // Detailed architectural style (e.g. Mughal, Gothic), design details, construction materials
    "cultural": string, // The cultural, local, or religious significance of the site
    "facts": string, // One or two interesting facts or local legends about the site
    "story": string, // A short, beautiful storytelling narrative or monologue of the monument written in the first person ("I stand...") or an engaging narrator voice
    "tourism": string // Tourism relevance: best time to visit, tips for travelers, local surrounding sites, or conservation status
  },
  "hi": {
    "name": string, // Monument Name in Hindi (e.g. "ताज महल")
    "history": string, // Detailed historical background in Hindi
    "architecture": string, // Architectural style and design details in Hindi
    "cultural": string, // Cultural/historical significance in Hindi
    "facts": string, // Interesting facts or legends in Hindi
    "story": string, // Storytelling narrative in Hindi (narrated beautifully)
    "tourism": string // Tourism relevance and visitor tips in Hindi
  }
}

Do not include any Markdown wrapper code block tags (like \`\`\`json or \`\`\`) in your response. Return ONLY the raw JSON string starting with { and ending with } so it can be parsed cleanly.
`;

        // Request body for Gemini API
        const geminiRequestBody = {
            contents: [
                {
                    parts: [
                        { text: promptText },
                        {
                            inlineData: {
                                mimeType: mimeType,
                                data: base64Data
                            }
                        }
                    ]
                }
            ],
            generationConfig: {
                responseMimeType: "application/json"
            }
        };

        const geminiApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

        const response = await fetch(geminiApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(geminiRequestBody)
        });

        if (!response.ok) {
            const errorDetails = await response.text();
            console.error('[Error] Gemini API returned error code:', response.status, errorDetails);
            throw new Error(`Gemini API Error: Status ${response.status}`);
        }

        const data = await response.json();
        
        // Extract text from Gemini output
        if (!data.candidates || data.candidates.length === 0 || !data.candidates[0].content || !data.candidates[0].content.parts || data.candidates[0].content.parts.length === 0) {
            throw new Error('Invalid response structure received from Gemini API');
        }

        const rawText = data.candidates[0].content.parts[0].text.trim();
        console.log('[System] Gemini response text retrieved. Parsing...');

        // Parse and clean raw JSON text
        let cleanedText = rawText;
        if (cleanedText.startsWith('```json')) {
            cleanedText = cleanedText.substring(7);
        }
        if (cleanedText.startsWith('```')) {
            cleanedText = cleanedText.substring(3);
        }
        if (cleanedText.endsWith('```')) {
            cleanedText = cleanedText.substring(0, cleanedText.length - 3);
        }
        cleanedText = cleanedText.trim();

        const parsedResult = JSON.parse(cleanedText);
        console.log('[System] Successfully parsed JSON result for monument:', parsedResult.en ? parsedResult.en.name : 'Unknown');

        // Send parsed result back to frontend client
        res.json(parsedResult);

    } catch (error) {
        console.error('[Error] Error scanning image:', error);
        res.status(500).json({
            error: 'Scan failed',
            message: error.message || 'An error occurred during Gemini image analysis.'
        });
    }
});

// Start Express Server
app.listen(PORT, () => {
    console.log(`===================================================`);
    console.log(`  HeritageLens AI Backend Server Online            `);
    console.log(`  Listening at: http://localhost:${PORT}           `);
    console.log(`===================================================`);
});
