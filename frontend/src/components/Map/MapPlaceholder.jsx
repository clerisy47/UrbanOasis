
import React from 'react';
import { MapPin } from 'lucide-react';

const MapPlaceholder = () => {
  return (
    <div className="flex-1 bg-beige/20 rounded-2xl border-2 border-sage/30 flex items-center justify-center">
      <div className="text-center p-8">
        <MapPin className="w-16 h-16 text-brunswick/40 mx-auto mb-4" />
        <h3 className="text-2xl font-serif font-semibold text-brunswick mb-2">
          Interactive Map
        </h3>
        <p className="text-brunswick/60">
          Map visualization with GeoJSON layers, heatmaps, and markers
        </p>
        <p className="text-sm text-brunswick/40 mt-4">
          (React Leaflet integration would be implemented here)
        </p>
      </div>
    </div>
  );
};

export default MapPlaceholder;