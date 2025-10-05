import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Map } from 'lucide-react';
import Chatbot from '../../components/chat/Chatbot';
import Alert from '../../components/ui/Alert';

const Kathmandu = () => {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen pt-20 px-6 bg-gradient-to-br from-floral via-beige to-sage">
      <Alert isChatOpen={isChatOpen} />
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-serif font-bold text-brunswick">Kathmandu District Analysis</h1>
        </div>

        <div className="space-y-8">
          {/* Environmental Section */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Environmental Factors</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Air Quality:</span> Kathmandu Valley’s annual mean PM₂.₅ is around 83 µg/m³ — far above the WHO guideline (5 µg/m³), resulting in a very low performance score (~6/100). PM2.5 levels exceed WHO guidelines by 300%, primarily due to vehicle emissions and construction dust.</li>
              <li><span className="font-semibold">Flood Risk:</span> Moderate risk in riverside settlements, particularly in the Bagmati and Bishnumati corridors. The valley faces flash floods and hill-slides during heavy monsoon rains, giving a moderate score (~60).</li>
              <li><span className="font-semibold">Temperature:</span> Average 25°C with urban heat island effect causing 2–3°C higher temperatures in dense areas. Warming and heat island effects reduce the score (~30).</li>
              <li><span className="font-semibold">Rainfall:</span> Annual precipitation is around 1,500–1,800 mm, mostly from June–September, with increasing extreme rainfall events under climate change (score ~50).</li>
              <li><span className="font-semibold">Overall Environmental Sub-score:</span> ~37/100.</li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Social Factors</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Population & Density:</span> The district has ~2.04 million people in 395 km² (~5,169/km²), an extremely high density that exceeds sustainable targets (score ~10).</li>
              <li><span className="font-semibold">Literacy Rate:</span> 89.4% (target 100%; score ~90), with higher concentration in urban core areas.</li>
              <li><span className="font-semibold">Access to Green Space:</span> Only 0.12 m² per capita, far below WHO’s 10 m²/person guideline (score ~20).</li>
              <li><span className="font-semibold">Overall Social Sub-score:</span> ~40/100.</li>
            </ul>
          </div>

          {/* Infrastructure Section */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Infrastructure & Resources</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Waste Management:</span> ~0.23 kg/capita/day generated, with ~60% formally collected and managed (score ~60).</li>
              <li><span className="font-semibold">Water Supply & Management:</span> 370 MLD demand with only 140 MLD supply capacity; however, access coverage is ~91% after Melamchi project (score ~91).</li>
              <li><span className="font-semibold">Public Transportation:</span> 30% reliance on public transport with growing electric vehicle adoption.</li>
              <li><span className="font-semibold">Overall Infrastructure Score:</span> ~76/100.</li>
            </ul>
          </div>

          {/* Climate Resilience */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Climate Resilience</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Heat Vulnerability:</span> High vulnerability due to dense urban areas and limited green cover (score ~30).</li>
              <li><span className="font-semibold">Flood Preparedness:</span> Moderate preparedness with early warning systems and hazard mapping, though stormwater drainage remains inadequate (score ~50).</li>
              <li><span className="font-semibold">Emergency Response:</span> Established disaster response teams with regular drills.</li>
              <li><span className="font-semibold">Overall Climate Resilience Score:</span> ~40/100.</li>
            </ul>
          </div>

          {/* Recommendations */}
          <div className="bg-brunswick/10 backdrop-blur-sm rounded-2xl p-8 border border-brunswick/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Recommendations</h2>
            <p className="text-brunswick/80 mb-4">
              <span className="font-semibold">Sustainability Index Score:</span> ≈49/100 (average of dimension scores).<br />
              <span className="font-semibold">Comparison to SDG Target:</span> Well below the 80/100 benchmark — Kathmandu’s SDI (~49) is ~31 points under the target. Key gaps include air quality, green space, waste management, and heat resilience.
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
                        <li>Use cleaner energy sources (LPG or electric stoves) and wear masks to reduce air pollution exposure.</li>
                        <li>Segregate and properly dispose of household waste.</li>
                        <li>Conserve water through rainwater harvesting and fixing leaks.</li>
                        <li>Plant and maintain rooftop gardens or trees.</li>
                        <li>Use public transport or carpool to reduce congestion and emissions.</li>
                        <li>Stay hydrated and avoid midday heat to reduce heat stress.</li>
                        <li>Participate in community clean-ups and tree-planting activities.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-t border-brunswick/20 align-top">
                    <td className="py-3 px-4 font-semibold">Urban Planner Level</td>
                    <td className="py-3 px-4">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Expand public transit systems (Bus Rapid Transit, non-motorized lanes).</li>
                        <li>Increase urban green spaces through parks and street trees (target 10 m²/person).</li>
                        <li>Upgrade solid waste systems to 100% collection and recycling coverage.</li>
                        <li>Improve stormwater drainage and enforce flood zoning regulations.</li>
                        <li>Expand piped water supply and sewage treatment to achieve full coverage.</li>
                        <li>Enforce building codes for heat resilience (cool roofing) and flood-risk zones.</li>
                        <li>Promote rooftop solar and energy-efficient appliances to reduce pollution and enhance climate adaptation.</li>
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
        district="Kathmandu" 
        onOpenChange={setIsChatOpen}
      />
    </div>
  );
};

export default Kathmandu;

