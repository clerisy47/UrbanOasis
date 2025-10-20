import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

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
        text: "I'm analyzing your query about sustainable urban development...",
        isUser: false
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-floral rounded-2xl shadow-xl border border-sage/20 flex flex-col">
      <div className="bg-brunswick text-floral p-4 rounded-t-2xl">
        <h3 className="font-serif font-semibold">Sustainability Assistant</h3>
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
            className="px-4 py-2 bg-brunswick text-floral rounded-xl hover:bg-brunswick/90"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbot;