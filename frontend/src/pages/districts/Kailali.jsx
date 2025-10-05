import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Map } from 'lucide-react';
import Chatbot from '../../components/chat/Chatbot';

const Kailali = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 px-6 bg-gradient-to-br from-floral via-beige to-sage">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-serif font-bold text-brunswick">Kailali District Analysis</h1>
        </div>

        <div className="space-y-8">
          {/* Environmental Section */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Environmental Factors</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Air Quality:</span> Seasonal haze is common in the Terai. Though unmonitored, PM₂.₅ routinely spikes due to crop burning and dust, averaging around 50–60 µg/m³ (WHO target 5; score ~10).</li>
              <li><span className="font-semibold">Flood Risk:</span> Extremely high — Kailali is highly flood-prone, with frequent monsoon inundation and riverbank erosion; climate change may worsen peak floods (score ~20).</li>
              <li><span className="font-semibold">Precipitation:</span> Heavy monsoon rains (~1,300–1,600 mm/year) cause routine floods (score ~30).</li>
              <li><span className="font-semibold">Temperature Trends:</span> The flat plains experience hot summers and occasional pre-monsoon heatwaves (score ~40).</li>
              <li><span className="font-semibold">Overall Environmental Sub-score:</span> ≈27/100.</li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Social Factors</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Population & Density:</span> ~904,666 people in 3,235 km² (~280/km²) — moderate density (score ~50).</li>
              <li><span className="font-semibold">Literacy Rate:</span> ~77.6% overall (target 100%; score ~78).</li>
              <li><span className="font-semibold">Green Space:</span> Extensive farmland and forest cover (including Bardiya NP). Per-capita green area well above 10 m² (score ~100).</li>
              <li><span className="font-semibold">Overall Social Sub-score:</span> ≈76/100.</li>
            </ul>
          </div>

          {/* Infrastructure Section */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Infrastructure & Resources</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Waste Management:</span> Dhangadhi city collects ~56 tons/day and manages ~77% through source-separation; rural areas still lack formal service (overall ~50% coverage; score ~50).</li>
              <li><span className="font-semibold">Water Supply:</span> Coverage ~91%, roughly in line with national rural standards (score ~91).</li>
              <li><span className="font-semibold">Overall Infrastructure Score:</span> ≈70/100.</li>
            </ul>
          </div>

          {/* Climate Resilience */}
          <div className="bg-floral/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Climate Resilience</h2>
            <ul className="space-y-4 text-brunswick/80">
              <li><span className="font-semibold">Heat Vulnerability:</span> Hot Terai climate causes moderate heat stress (score ~50).</li>
              <li><span className="font-semibold">Flood Preparedness:</span> Early-warning systems and evacuation planning (e.g., Kandra River) have improved, but frequent floods persist (score ~40).</li>
              <li><span className="font-semibold">Overall Climate Resilience Score:</span> ≈45/100.</li>
            </ul>
          </div>

          {/* Recommendations */}
          <div className="bg-brunswick/10 backdrop-blur-sm rounded-2xl p-8 border border-brunswick/20">
            <h2 className="text-2xl font-serif font-semibold text-brunswick mb-4">Recommendations</h2>
            <p className="text-brunswick/80 mb-4">
              <span className="font-semibold">Sustainability Index Score:</span> ≈55/100<br />
              <span className="font-semibold">Comparison to SDG Target:</span> Below 80 — Kailali’s SDI (~55) is ~25 points under target. Key deficits include flood risk and pollution control.
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
                        <li>Reduce biomass burning and open waste-burning to cut air pollution.</li>
                        <li>Use masks during haze and maintain good indoor ventilation.</li>
                        <li>Maintain village drains and prevent dumping in rivers.</li>
                        <li>Adopt water-saving practices in farming (e.g., drip irrigation, rainwater ponds).</li>
                        <li>Build homes on stilts or raised platforms to mitigate flood damage.</li>
                        <li>Stay informed of flood alerts via radio or mobile warnings.</li>
                        <li>Plant trees in homesteads to cool the local microclimate.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-t border-brunswick/20 align-top">
                    <td className="py-3 px-4 font-semibold">Urban Planner Level</td>
                    <td className="py-3 px-4">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Expand flood-control infrastructure — strengthen and heighten embankments, and improve early-warning systems along Kandra and Geruwa rivers.</li>
                        <li>Promote drought- and heat-resilient crops and farming systems.</li>
                        <li>Improve city waste systems (scale up Dhangadhi’s model) and rural waste disposal through community compost pits.</li>
                        <li>Achieve 100% piped water coverage with arsenic testing and treatment.</li>
                        <li>Plan urban growth in Dhangadhi with green belts and water-sensitive drainage.</li>
                        <li>Integrate heat mitigation (urban tree cover, cool pavements) into building regulations.</li>
                        <li>Ensure all new infrastructure considers climate risk and aligns with Nepal’s SDG and resilience goals.</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Chatbot district="Kailali" />
    </div>
  );
};

export default Kailali;
