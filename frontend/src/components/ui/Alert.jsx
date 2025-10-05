import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const Alert = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000); // Hide after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-24 right-4 w-80 bg-brunswick text-floral px-6 py-4 rounded-xl shadow-lg border border-sage/20 animate-fade-in-up z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">Chat with our Sustainability Guru! Click the message icon below</p>
        </div>
        <button 
          onClick={() => setShow(false)}
          className="text-floral/80 hover:text-floral ml-2 flex-shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Alert;