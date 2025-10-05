import React from 'react';
import { MessageCircle } from 'lucide-react';

const Alert = ({ isChatOpen }) => {
  if (isChatOpen) return null;

  return (
    <div className="fixed bottom-24 right-4 w-80 bg-brunswick text-floral px-6 py-4 rounded-xl shadow-lg border border-sage/20 animate-fade-in-up z-50">
      <div className="flex items-center gap-2">
        <MessageCircle className="w-5 h-5 flex-shrink-0" />
        <p className="text-sm">Chat with our Sustainability Guru! Click the message icon below</p>
      </div>
    </div>
  );
};

export default Alert;