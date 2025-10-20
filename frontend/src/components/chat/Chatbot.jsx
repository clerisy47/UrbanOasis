import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const GOOGLE_API_KEY = process.env.GEMINI_API_KEY;

const Chatbot = ({ district, onOpenChange }) => {
    const [genAI, setGenAI] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [apiKeySet, setApiKeySet] = useState(false);

    // Load Google Generative AI SDK
    useEffect(() => {
        const loadSDK = async () => {
            try {
                const { GoogleGenerativeAI } = await import('@google/generative-ai');
                const ai = new GoogleGenerativeAI(GOOGLE_API_KEY);
                // Check available models
                const model = ai.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
                await model.generateContent("test"); // Verify the model works
                setGenAI(ai);
                setApiKeySet(true);
            } catch (err) {
                console.error('Failed to load Gemini SDK:', err);
                setError('Failed to load Gemini SDK. Check your API key or internet connection.');
            }
        };
        loadSDK();
    }, []);
    const welcomeMessages = {
        kathmandu: "Namaste! I am Sustainability Guru. You are currently in Kathmandu. I can help you understand the urban challenges and opportunities in the capital city. Ask me about air quality, waste management, public transportation, or any other sustainability aspects of Kathmandu.",
        sindhupalchok: "Hi! I am Sustainability Guru. You are currently in Sindhupalchok. I can help you understand the rural development challenges and opportunities in this mountainous district. Ask me about landslide risks, agriculture, forest conservation, or any other sustainability aspects of Sindhupalchok.",
        kailali: "Hi! I am Sustainability Guru. You are currently in Kailali. I can help you understand the development challenges and opportunities in this Terai district. Ask me about flood management, agricultural practices, biodiversity conservation, or any other sustainability aspects of Kailali."
    };

    const [messages, setMessages] = useState([{
        text: welcomeMessages[district.toLowerCase()] || "Welcome! Ask me anything about sustainability in this district.",
        isUser: false
    }]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || !genAI || loading) return;

        // Add user message
        const newMessages = [...messages, { text: input, isUser: true }];
        setMessages(newMessages);
        setInput('');
        setLoading(true);

        try {
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

            const prompt = `
You are 'Sustainability Guru', a specialized assistant focusing on sustainability in ${district}, Nepal.

Instructions:
- Provide accurate information about ${district}'s sustainability challenges and opportunities
- Be concise and informative
- Focus on local context and practical solutions
- If unsure, acknowledge limitations and suggest reliable sources

Question: ${input}
`;

            const result = await model.generateContent(prompt);
            const text = result.response.text();

            setMessages([...newMessages, {
                text: text,
                isUser: false
            }]);
        } catch (err) {
            console.error('Gemini API error:', err);
            setMessages([...newMessages, {
                text: "I apologize, but I'm having trouble processing your request at the moment. Please try again later.",
                isUser: false
            }]);
            setError(err.message || 'Failed to get response from AI');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <button
                onClick={() => {
                    const newIsOpen = !isOpen;
                    setIsOpen(newIsOpen);
                    onOpenChange?.(newIsOpen);
                }}
                className="fixed bottom-4 right-4 w-12 h-12 bg-brunswick text-floral rounded-full shadow-lg flex items-center justify-center hover:bg-brunswick/90 transition-all duration-300"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                </svg>
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-20 right-4 w-80 h-[500px] bg-floral rounded-2xl shadow-xl border border-sage/20 flex flex-col z-50">
                    <div className="bg-brunswick text-floral p-4 rounded-t-2xl flex justify-between items-center">
                        <h3 className="font-serif font-semibold">Sustainable Guru</h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-floral/80 hover:text-floral"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-xl ${msg.isUser
                                    ? 'bg-brunswick text-floral rounded-tr-none'
                                    : 'bg-sage/20 text-brunswick rounded-tl-none'
                                    } prose prose-sm`}>
                                    {msg.isUser ? (
                                        msg.text
                                    ) : (
                                        <ReactMarkdown>
                                            {msg.text}
                                        </ReactMarkdown>
                                    )}
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-start">
                                <div className="max-w-[80%] p-3 rounded-xl bg-sage/10 text-brunswick/50 rounded-tl-none">
                                    Thinking...
                                </div>
                            </div>
                        )}
                    </div>

                    {error && (
                        <div className="px-4 py-2 bg-red-50 border-t border-red-200">
                            <p className="text-red-600 text-sm">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSend} className="p-4 border-t border-sage/20">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={`Ask about ${district}...`}
                                className="flex-1 px-4 py-2 rounded-xl border border-sage/20 focus:outline-none focus:border-brunswick"
                                disabled={!apiKeySet || loading}
                            />
                            <button
                                type="submit"
                                className={`p-2 rounded-xl ${loading || !apiKeySet
                                    ? 'bg-brunswick/50 cursor-not-allowed'
                                    : 'bg-brunswick hover:bg-brunswick/90'
                                    } text-floral`}
                                disabled={loading || !apiKeySet}
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default Chatbot;