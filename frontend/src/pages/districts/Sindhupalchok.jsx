import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Map } from 'lucide-react';
import Chatbot from '../../components/chat/Chatbot';
import Alert from '../../components/ui/Alert';

const Sindhupalchok = () => {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen pt-20 px-6 bg-gradient-to-br from-floral via-beige to-sage">
      <Alert isChatOpen={isChatOpen} />
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-serif font-bold text-brunswick">Sindhupalchok District Analysis</h1>
        </div>

        <div className="space-y-8">
          {/* Environmental Section */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Environmental Factors</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Air Quality:</span> Ambient air is generally clean in this hill district. Indoor smoke from wood stoves remains a concern, but outdoor PM₂.₅ is likely near WHO guidelines (&lt;5 µg/m³), indicating high performance (score ≈100).</li>
              <li><span className="font-semibold">Flood & Landslide Risk:</span> Extremely high vulnerability. Sindhupalchok is “extremely prone” to monsoon floods and landslides; recent years have seen multiple fatal incidents (score ≈10).</li>
              <li><span className="font-semibold">Precipitation:</span> Heavy monsoon rainfall in valleys and snowfall at higher altitudes elevate landslide risks (score ≈30).</li>
              <li><span className="font-semibold">Temperature Trends:</span> Cold mountain climate is warming; glacial lake outburst floods have occurred in recent decades (score ≈50).</li>
              <li><span className="font-semibold">Overall Environmental Sub-score:</span> ≈48/100.</li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Social Factors</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Population & Density:</span> Approximately 262,624 residents over 2,542 km² (~103/km²). Low density supports space but creates service delivery challenges (score ≈80).</li>
              <li><span className="font-semibold">Literacy Rate:</span> About 63% (2021 data), significantly below national targets (score ≈63).</li>
              <li><span className="font-semibold">Green Space:</span> Nearly 50% forest cover, with extensive protected zones providing high green space per capita (score ≈100).</li>
              <li><span className="font-semibold">Overall Social Sub-score:</span> ≈81/100.</li>
            </ul>
          </div>

          {/* Infrastructure & Resources */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Infrastructure & Resources</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Waste Management:</span> Formal waste collection is minimal; most settlements rely on local dumping or burning (score ≈5).</li>
              <li><span className="font-semibold">Water Supply:</span> Roughly 50% of households have piped water; others depend on springs (score ≈50).</li>
              <li><span className="font-semibold">Overall Infrastructure Score:</span> ≈28/100.</li>
            </ul>
          </div>

          {/* Climate Resilience */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Climate Resilience</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Heat Vulnerability:</span> Mountain climate leads to low heat risk (score ≈80).</li>
              <li><span className="font-semibold">Flood Preparedness:</span> Early-warning systems and evacuation plans exist but remain limited by resources (score ≈20).</li>
              <li><span className="font-semibold">Overall Climate Resilience Score:</span> ≈50/100.</li>
            </ul>
          </div>

          {/* Recommendations Section */}
          <div className="bg-brunswick/10 backdrop-blur-sm rounded-2xl p-8 border border-brunswick/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Recommendations</h2>
            <p className="text-brunswick/80 mb-4">
              <span className="font-semibold">Sustainability Index Score:</span> ≈52/100.<br />
              <span className="font-semibold">Comparison to SDG Target:</span> Sindhupalchok’s SDI (~52) is about 28 points below the 80/100 benchmark. Key challenges include disaster risk and basic service coverage.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-brunswick/20 text-brunswick/80">
                <thead className="bg-brunswick/20 text-brunswick">
                  <tr>
                    <th className="py-2 px-4 text-left font-semibold">Level</th>
                    <th className="py-2 px-4 text-left font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-brunswick/20 align-top">
                    <td className="py-3 px-4 font-semibold">Individual Level</td>
                    <td className="py-3 px-4">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Use efficient stoves and cleaner fuels to reduce indoor smoke and improve air quality.</li>
                        <li>Practice safe waste disposal through composting and avoid dumping in rivers or open areas.</li>
                        <li>Participate in community forestry and slope stabilization to mitigate landslide risks.</li>
                        <li>Conserve water during dry periods and promote rainwater harvesting.</li>
                        <li>Prepare emergency kits and follow local warnings during monsoon seasons.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-t border-brunswick/20 align-top">
                    <td className="py-3 px-4 font-semibold">Urban Planner Level</td>
                    <td className="py-3 px-4">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Expand gravity-fed piped water systems to achieve full household coverage.</li>
                        <li>Develop small-scale composting units and install community waste bins in rural centers.</li>
                        <li>Invest in slope stabilization and flood defense infrastructure in high-risk settlements.</li>
                        <li>Improve rural roads with drainage and resilient bridge designs.</li>
                        <li>Expand electricity and telecom coverage to enable early-warning dissemination.</li>
                        <li>Support literacy and school programs to raise educational levels.</li>
                        <li>Integrate disaster-risk mapping into local development planning following UNDP guidelines.</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Chatbot 
        district="Sindhupalchok" 
        onOpenChange={setIsChatOpen}
      />
    </div>
  );
};

export default Sindhupalchok;
