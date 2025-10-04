import React from 'react';
import ExpandablePanel from '../components/KnowMore/ExpandablePanel';

const KnowMorePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-floral via-beige to-sage pt-20">
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl text-center space-y-4">
          <h2 className="text-5xl font-serif font-bold text-brunswick">Discover Our Features</h2>
          <p className="text-lg font-sans text-brunswick/70">
            Click to explore what makes us unique
          </p>
        </div>

        <div className="mt-12 space-y-4 max-w-4xl mx-auto">
          <ExpandablePanel 
            title="Lightning Fast Performance" 
            content="Experience seamless interactions and instant load times with optimized rendering and efficient architecture." 
            dataSource="NASA MODIS satellite data provides real-time monitoring of urban infrastructure performance and environmental conditions."
          />
          <ExpandablePanel 
            title="Beautiful Design System" 
            content="Every pixel is crafted with care, blending modern aesthetics and soft gradients for an elegant experience." 
            dataSource="Landsat imagery from NASA Earth Observatory helps visualize urban green spaces and aesthetic planning zones."
          />
          <ExpandablePanel 
            title="Enterprise-Grade Security" 
            content="We prioritize your privacy with end-to-end encryption, secure authentication, and regular audits." 
            dataSource="NASA SEDAC (Socioeconomic Data and Applications Center) provides population density and infrastructure security data."
          />
          <ExpandablePanel 
            title="Global Accessibility" 
            content="Our platform adapts fluidly to every device and meets global accessibility standards." 
            dataSource="NASA Earthdata provides global coverage for accessibility planning, including terrain analysis and connectivity mapping."
          />
        </div>
      </section>
    </div>
  );
};

export default KnowMorePage;
