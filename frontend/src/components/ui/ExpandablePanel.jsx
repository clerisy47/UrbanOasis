import React, { useState } from 'react';
import InfoButton from './InfoButton';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ExpandablePanel = ({ title, content, icon, dataSource }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-floral/40 rounded-2xl border border-sage/30 p-6 shadow-md transition-all duration-300 hover:shadow-lg">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-2xl">{icon}</span>}
          <h3 className="text-lg font-semibold text-brunswick">{title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <InfoButton source={dataSource} />
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>

      {isExpanded && (
        <p className="mt-4 text-brunswick/80 text-sm leading-relaxed">{content}</p>
      )}
    </div>
  );
};

export default ExpandablePanel;
