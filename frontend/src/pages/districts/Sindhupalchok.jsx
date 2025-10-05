import React from 'react';
import Chatbot from '../../components/chat/Chatbot';

const Sindhupalchok = () => {
  return (
    <div className="min-h-screen pt-20 px-6 bg-gradient-to-br from-floral via-beige to-sage">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-brunswick mb-8">Sindhupalchok District Analysis</h1>
        
        <div className="space-y-8">
          {/* Environmental Section */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Environmental Factors</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Landslide Risk:</span> High vulnerability with 285 identified risk zones</li>
              <li><span className="font-semibold">Forest Cover:</span> 45% of total area with declining trend due to infrastructure development</li>
              <li><span className="font-semibold">Temperature:</span> Average 18°C with significant variations due to altitude differences</li>
              <li><span className="font-semibold">Rainfall:</span> 2200mm annual precipitation with increased intensity during monsoon</li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Social Factors</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Population:</span> 287,798 inhabitants with declining trend due to migration</li>
              <li><span className="font-semibold">Literacy Rate:</span> 68.3% with significant gender disparity</li>
              <li><span className="font-semibold">Agriculture Dependency:</span> 75% of population relies on agriculture</li>
            </ul>
          </div>

          {/* Infrastructure Section */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Infrastructure & Resources</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Road Network:</span> 60% of settlements connected by roads, mostly unpaved</li>
              <li><span className="font-semibold">Water Access:</span> 75% households have basic water access</li>
              <li><span className="font-semibold">Healthcare Facilities:</span> 1 hospital per 35,000 residents</li>
              <li><span className="font-semibold">Hydropower Potential:</span> Multiple projects under development with 500MW capacity</li>
            </ul>
          </div>

          {/* Climate Resilience */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Climate Resilience</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Disaster Preparedness:</span> Limited early warning systems for landslides</li>
              <li><span className="font-semibold">Agricultural Adaptation:</span> Traditional farming practices vulnerable to climate change</li>
              <li><span className="font-semibold">Community Resilience:</span> Strong local support networks but limited resources</li>
            </ul>
          </div>
          
          {/* Recommendations */}
          <div className="bg-brunswick/10 backdrop-blur-sm rounded-2xl p-8 border border-brunswick/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Recommendations</h2>
            <ul className="space-y-2 text-brunswick/80">
              <li>• Implement comprehensive landslide monitoring and early warning systems</li>
              <li>• Develop climate-resilient agricultural practices and training programs</li>
              <li>• Improve road infrastructure with proper drainage systems</li>
              <li>• Establish community-based forest management programs</li>
              <li>• Enhance access to quality education and vocational training</li>
              <li>• Develop eco-tourism infrastructure to diversify income sources</li>
              <li>• Strengthen healthcare infrastructure with mobile medical units</li>
            </ul>
          </div>
        </div>
      </div>
      <Chatbot />
    </div>
  );
};

export default Sindhupalchok;