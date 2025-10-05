import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import InfoButton from '../shared/InfoButton';

const ExpandablePanel = ({ title, content, dataSource }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-floral/40 backdrop-blur-lg rounded-2xl border border-sage/20 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-4 flex-1">
          <h3 className="text-xl font-serif font-semibold text-brunswick">{title}</h3>
        </div>
        <div className="flex items-center gap-3">
          <InfoButton source={dataSource} />
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 text-brunswick" />
          ) : (
            <ChevronDown className="w-6 h-6 text-brunswick" />
          )}
        </div>
      </button>
      
      {isExpanded && (
        <div className="px-6 pb-6">
          <p className="text-brunswick/80 leading-relaxed">{content}</p>
        </div>
      )}
    </div>
  );
};

export default ExpandablePanel;
