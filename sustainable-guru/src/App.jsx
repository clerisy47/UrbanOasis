import { useState, useEffect } from 'react';

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export function useGeminiRAG() {
  const [context, setContext] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [contextSet, setContextSet] = useState(false);
  const [error, setError] = useState('');
  const [apiKeySet, setApiKeySet] = useState(false);
  const [genAI, setGenAI] = useState(null);
  const [fetchingContext, setFetchingContext] = useState(false);

  // Load Google Generative AI SDK
  useEffect(() => {
    const loadSDK = async () => {
      try {
        const { GoogleGenerativeAI } = await import('https://esm.run/@google/generative-ai');
        const ai = new GoogleGenerativeAI(GOOGLE_API_KEY);
        setGenAI(ai);
        setApiKeySet(true);
      } catch (err) {
        console.error('Failed to load Gemini SDK:', err);
        setError('Failed to load Gemini SDK. Check your API key or internet connection.');
      }
    };
    loadSDK();
  }, []);

  // Fetch context from backend
  const fetchContextFromBackend = async (backendUrl, params = {}) => {
    setFetchingContext(true);
    setError('');
    
    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        throw new Error(`Backend error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      // Assuming backend returns { context: "..." } or { data: "..." }
      const contextText = data.context || data.data || data.content || '';
      
      if (contextText.trim()) {
        setContext(contextText);
        setContextSet(true);
        setMessages([
          {
            role: 'system',
            content: `Context loaded from backend successfully! (${contextText.length} characters). You can now ask questions about this content.`,
          },
        ]);
        return { success: true, context: contextText };
      } else {
        throw new Error('Backend returned empty context');
      }
    } catch (err) {
      const errorMsg = err.message || 'Failed to fetch context from backend';
      setError(errorMsg);
      setMessages([
        {
          role: 'system',
          content: `Error: ${errorMsg}`,
        },
      ]);
      return { success: false, error: errorMsg };
    } finally {
      setFetchingContext(false);
    }
  };

  // Clear context and reset chat
  const handleClearContext = () => {
    setContext('');
    setContextSet(false);
    setMessages([]);
    setError('');
  };

  // Send message to Gemini
  const sendMessage = async (userInput) => {
    if (!userInput.trim() || !contextSet || !genAI) {
      return false;
    }

    const userMessage = { role: 'user', content: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setError('');

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

      const prompt = `
You are 'Sustainability Guru', the go-to bot for sustainability information in Nepal.

Context:
${context}

Question: ${userInput}

Instructions:
- Answer based primarily on the context provided above.
- You can use your own knowledge if the questions user asks are outside the context
- Be concise and accurate.
`;

      const result = await model.generateContent(prompt);
      const text = result.response.text();

      if (text) {
        setMessages((prev) => [...prev, { role: 'assistant', content: text }]);
        return true;
      } else {
        throw new Error('Empty response from API');
      }
    } catch (err) {
      const errorMsg = err.message || 'An error occurred';
      setError(errorMsg);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: `Error: ${errorMsg}\n\nPlease check your API key and try again.` },
      ]);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    // State
    context,
    messages,
    loading,
    contextSet,
    error,
    apiKeySet,
    fetchingContext,
    
    // Methods
    handleClearContext,
    sendMessage,
    fetchContextFromBackend,
  };
}

// Example usage component
export default function GeminiRAGChatbot() {
  const {
    context,
    messages,
    loading,
    contextSet,
    error,
    apiKeySet,
    fetchingContext,
    handleClearContext,
    sendMessage,
    fetchContextFromBackend,
  } = useGeminiRAG();

  const [input, setInput] = useState('');
  const [backendUrl, setBackendUrl] = useState('http://localhost:3000/api/context');

  const handleSubmit = async () => {
    if (input.trim()) {
      await sendMessage(input);
      setInput('');
    }
  };

  const handleFetchFromBackend = async () => {
    // You can pass any parameters your backend needs
    await fetchContextFromBackend(backendUrl, {
      // Example params - adjust based on your backend API
      userId: 'user123',
      documentId: 'doc456',
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Gemini RAG Chatbot - Backend Context</h1>
      
      {!contextSet && apiKeySet && (
        <div style={{ marginBottom: '20px' }}>
          <h2>Load Context from Backend</h2>
          
          <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <input
              type="text"
              value={backendUrl}
              onChange={(e) => setBackendUrl(e.target.value)}
              style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
              placeholder="Backend URL (e.g., http://localhost:3000/api/context)"
            />
            <button 
              onClick={handleFetchFromBackend} 
              disabled={fetchingContext}
              style={{ 
                padding: '10px 20px', 
                cursor: fetchingContext ? 'not-allowed' : 'pointer',
                backgroundColor: fetchingContext ? '#ccc' : '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '5px'
              }}
            >
              {fetchingContext ? 'Fetching...' : 'Fetch Context from Backend'}
            </button>
          </div>
        </div>
      )}

      {contextSet && (
        <div>
          <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
            <strong>Context loaded:</strong> {context.length} characters
          </div>

          <h2>Chat</h2>
          <div style={{ 
            border: '1px solid #ccc', 
            padding: '15px', 
            height: '400px', 
            overflowY: 'auto',
            marginBottom: '10px',
            backgroundColor: '#fafafa',
            borderRadius: '5px'
          }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ 
                marginBottom: '15px',
                textAlign: msg.role === 'user' ? 'right' : 'left'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '10px',
                  borderRadius: '10px',
                  backgroundColor: msg.role === 'user' ? '#007bff' : msg.role === 'system' ? '#28a745' : '#e9ecef',
                  color: msg.role === 'user' || msg.role === 'system' ? 'white' : 'black',
                  maxWidth: '70%',
                  textAlign: 'left'
                }}>
                  <strong>{msg.role === 'user' ? 'You' : msg.role === 'system' ? 'System' : 'Sustainability Guru'}:</strong>
                  <div style={{ marginTop: '5px' }}>{msg.content}</div>
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ textAlign: 'center', color: '#666' }}>
                <em>Sustainability Guru is thinking...</em>
              </div>
            )}
          </div>

          {error && (
            <div style={{ 
              color: 'white', 
              backgroundColor: '#dc3545', 
              padding: '10px', 
              borderRadius: '5px', 
              marginBottom: '10px' 
            }}>
              {error}
            </div>
          )}

          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !loading && handleSubmit()}
              style={{ 
                flex: 1, 
                padding: '10px', 
                borderRadius: '5px', 
                border: '1px solid #ccc' 
              }}
              placeholder="Ask a question about sustainability..."
              disabled={loading}
            />
            <button 
              onClick={handleSubmit} 
              disabled={loading || !input.trim()}
              style={{ 
                padding: '10px 20px', 
                cursor: loading ? 'not-allowed' : 'pointer',
                backgroundColor: loading ? '#ccc' : '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px'
              }}
            >
              Send
            </button>
            <button 
              onClick={handleClearContext}
              style={{ 
                padding: '10px 20px', 
                cursor: 'pointer',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '5px'
              }}
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {!apiKeySet && (
        <div style={{ color: 'red', padding: '20px', border: '1px solid red', borderRadius: '5px' }}>
          Error: Google API Key not configured. Please set VITE_GOOGLE_API_KEY in your environment variables.
        </div>
      )}
    </div>
  );
}