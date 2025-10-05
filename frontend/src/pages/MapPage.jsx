import React from 'react';
import MapPlaceholder from '../components/Map/MapPlaceholder';
import Sidebar from '../components/Map/Sidebar';

const MapPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-floral via-beige to-sage pt-20">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-serif font-bold text-brunswick mb-8">Interactive Map</h1>
        
        <div className="flex gap-6 h-[calc(100vh-250px)]">
          <Sidebar />
          <MapPlaceholder />
        </div>
      </div>
    </div>
  );
};

export default MapPage;