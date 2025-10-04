import React, { useState } from 'react';
import { X, Info } from 'lucide-react';

const InfoButton = ({ source }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <button className="w-8 h-8 bg-sage/20 hover:bg-sage/40 border border-sage/40 rounded flex items-center justify-center transition-all duration-300">
        <Info className="w-4 h-4 text-brunswick" />
      </button>

      {showInfo && (
        <div className="absolute left-12 top-0 z-50 w-64 bg-floral border-2 border-sage/40 rounded-xl p-4 shadow-xl">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-brunswick text-sm">Data Source</h4>
            <button
              onClick={() => setShowInfo(false)}
              className="text-brunswick/60 hover:text-brunswick"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-brunswick/80 leading-relaxed">{source}</p>
        </div>
      )}
    </div>
  );
};

export default InfoButton;
