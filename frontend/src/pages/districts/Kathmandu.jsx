import React from 'react';
import KathmanduChatbot from '../../components/chat/KathmanduChatbot';

const Kathmandu = () => {
  return (
    <div className="min-h-screen pt-20 px-6 bg-gradient-to-br from-floral via-beige to-sage">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-brunswick mb-8">Kathmandu District Analysis</h1>
        
        <div className="space-y-8">
          {/* Environmental Section */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Environmental Factors</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Air Quality:</span> PM2.5 levels exceed WHO guidelines by 300%, primarily due to vehicle emissions and construction dust</li>
              <li><span className="font-semibold">Flood Risk:</span> Moderate risk in riverside settlements, particularly in the Bagmati and Bishnumati corridors</li>
              <li><span className="font-semibold">Temperature:</span> Average 25°C with urban heat island effect causing 2-3°C higher temperatures in dense areas</li>
              <li><span className="font-semibold">Rainfall:</span> 1400mm annual precipitation with increasing instances of extreme rainfall events</li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Social Factors</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Population & Density:</span> 2.5 million inhabitants with density of 20,288 people per sq km</li>
              <li><span className="font-semibold">Literacy Rate:</span> 89.4% with higher concentration in urban core areas</li>
              <li><span className="font-semibold">Access to Green Space:</span> 0.12 sq meters per capita, significantly below WHO recommendations</li>
            </ul>
          </div>

          {/* Infrastructure Section */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Infrastructure & Resources</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Waste Management:</span> 1,200 tons of daily waste with 60% collection efficiency</li>
              <li><span className="font-semibold">Water Supply & Management:</span> 370 MLD demand with only 140 MLD supply capacity</li>
              <li><span className="font-semibold">Public Transportation:</span> 30% reliance on public transport with growing electric vehicle adoption</li>
            </ul>
          </div>

          {/* Climate Resilience */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Climate Resilience</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Heat Vulnerability:</span> High vulnerability in dense urban areas with limited green cover</li>
              <li><span className="font-semibold">Flood Preparedness:</span> Moderate preparedness with early warning systems in place</li>
              <li><span className="font-semibold">Emergency Response:</span> Established disaster response teams with regular drills</li>
            </ul>
          </div>
          
          {/* Recommendations */}
          <div className="bg-brunswick/10 backdrop-blur-sm rounded-2xl p-8 border border-brunswick/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Recommendations</h2>
            <ul className="space-y-2 text-brunswick/80">
              <li>• Implement strict vehicle emission controls and expand electric vehicle infrastructure</li>
              <li>• Increase urban green spaces by 40% through rooftop gardens and vertical forests</li>
              <li>• Upgrade drainage systems in flood-prone areas with nature-based solutions</li>
              <li>• Develop community-based waste management and recycling programs</li>
              <li>• Implement rainwater harvesting systems in all new constructions</li>
              <li>• Establish green corridors to reduce urban heat island effect</li>
              <li>• Modernize public transportation with electric buses and improved routes</li>
            </ul>
          </div>
        </div>
      </div>
      <KathmanduChatbot />
    </div>
  );
};

export default Kathmandu;
