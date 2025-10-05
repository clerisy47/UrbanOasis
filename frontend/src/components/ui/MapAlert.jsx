import React from 'react';
import { Info } from 'lucide-react';

const MapAlert = () => {

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-auto max-w-xl bg-brunswick text-floral px-6 py-4 rounded-xl shadow-lg border border-sage/20 animate-fade-in-up z-[1000]">
      <div className="flex items-center gap-3">
        <Info className="w-5 h-5 flex-shrink-0" />
        <p className="text-sm">Click on the blue markers to get more info and 'Full Analysis' for detailed report</p>
      </div>
    </div>
  );
};

export default MapAlert;