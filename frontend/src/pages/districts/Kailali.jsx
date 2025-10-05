import React from 'react';
import KailaliChatbot from '../../components/chat/KailaliChatbot';

const Kailali = () => {
  return (
    <div className="min-h-screen pt-20 px-6 bg-gradient-to-br from-floral via-beige to-sage">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-brunswick mb-8">Kailali District Analysis</h1>
        
        <div className="space-y-8">
          {/* Environmental Section */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Environmental Factors</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Flood Risk:</span> High vulnerability along Karnali and Mohana rivers</li>
              <li><span className="font-semibold">Forest Cover:</span> 52% with significant biodiversity in Chure region</li>
              <li><span className="font-semibold">Temperature:</span> Average 24°C with increasing summer extremes</li>
              <li><span className="font-semibold">Rainfall:</span> 1800mm annual precipitation with uneven distribution</li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Social Factors</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Population:</span> 775,709 inhabitants with rapid urbanization in Dhangadhi</li>
              <li><span className="font-semibold">Literacy Rate:</span> 66.3% with improving trend</li>
              <li><span className="font-semibold">Agricultural Communities:</span> 65% population dependent on agriculture</li>
            </ul>
          </div>

          {/* Infrastructure Section */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Infrastructure & Resources</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Transportation:</span> East-West Highway connectivity with developing road network</li>
              <li><span className="font-semibold">Irrigation:</span> 45% of agricultural land has irrigation access</li>
              <li><span className="font-semibold">Healthcare:</span> 1 hospital per 50,000 residents with limited specialized care</li>
              <li><span className="font-semibold">Education:</span> Growing number of technical education facilities</li>
            </ul>
          </div>

          {/* Climate Resilience */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Climate Resilience</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Flood Management:</span> Basic early warning systems with need for improvement</li>
              <li><span className="font-semibold">Agricultural Adaptation:</span> Growing adoption of climate-resistant crops</li>
              <li><span className="font-semibold">Ecosystem Protection:</span> Active conservation efforts in Chure region</li>
            </ul>
          </div>
          
          {/* Recommendations */}
          <div className="bg-brunswick/10 backdrop-blur-sm rounded-2xl p-8 border border-brunswick/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Recommendations</h2>
            <ul className="space-y-2 text-brunswick/80">
              <li>• Strengthen flood control infrastructure along major rivers</li>
              <li>• Expand irrigation systems with water-efficient technologies</li>
              <li>• Develop integrated waste management systems in urban areas</li>
              <li>• Implement sustainable forest management practices</li>
              <li>• Improve healthcare infrastructure with focus on rural areas</li>
              <li>• Promote climate-smart agriculture and diversification</li>
              <li>• Enhance technical education and skill development programs</li>
            </ul>
          </div>
        </div>
      </div>
      <KailaliChatbot />
    </div>
  );
};

export default Kailali;