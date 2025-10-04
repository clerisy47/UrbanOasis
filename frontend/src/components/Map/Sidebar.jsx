
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-floral/40 backdrop-blur-lg rounded-2xl border border-sage/20 p-6 shadow-lg">
      <h3 className="text-xl font-serif font-semibold text-brunswick mb-4">
        Map Controls
      </h3>
      <div className="space-y-3">
        <button className="w-full p-3 bg-beige/20 hover:bg-beige/30 rounded-lg text-brunswick text-left transition-colors">
          Toggle Districts
        </button>
        <button className="w-full p-3 bg-beige/20 hover:bg-beige/30 rounded-lg text-brunswick text-left transition-colors">
          Toggle Municipalities
        </button>
        <button className="w-full p-3 bg-beige/20 hover:bg-beige/30 rounded-lg text-brunswick text-left transition-colors">
          Toggle Heatmap
        </button>
        <button className="w-full p-3 bg-beige/20 hover:bg-beige/30 rounded-lg text-brunswick text-left transition-colors">
          Toggle Markers
        </button>
      </div>
      
      <div className="mt-6 pt-6 border-t border-sage/20">
        <h4 className="text-sm font-semibold text-brunswick mb-2">Legend</h4>
        <div className="space-y-2 text-sm text-brunswick/70">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span>High Intensity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span>Medium Intensity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span>Low Intensity</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;