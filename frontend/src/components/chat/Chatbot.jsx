import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Chatbot = () => {
  const [messages, setMessages] = useState([{
    text: "Hello! I'm your sustainability assistant. Ask me anything about urban development and sustainability in Nepal's districts!",
    isUser: false
  }]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { text: input, isUser: true }];
    setMessages(newMessages);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      setMessages([...newMessages, {
        text: "I'm analyzing your query about sustainable urban development. This feature will be connected to a real AI backend soon!",
        isUser: false
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
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
        <div className="fixed bottom-20 right-4 w-96 h-[500px] bg-floral rounded-2xl shadow-xl border border-sage/20 flex flex-col">
          <div className="bg-brunswick text-floral p-4 rounded-t-2xl flex justify-between items-center">
            <h3 className="font-serif font-semibold">Sustainability Assistant</h3>
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
                <div className={`max-w-[80%] p-3 rounded-xl ${
                  msg.isUser 
                    ? 'bg-brunswick text-floral rounded-tr-none' 
                    : 'bg-sage/20 text-brunswick rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-4 border-t border-sage/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about sustainability..."
                className="flex-1 px-4 py-2 rounded-xl border border-sage/20 focus:outline-none focus:border-brunswick"
              />
              <button 
                type="submit"
                className="p-2 bg-brunswick text-floral rounded-xl hover:bg-brunswick/90"
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