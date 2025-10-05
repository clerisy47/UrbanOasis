import "./Sidebar.css"
import { MapPin } from "lucide-react";


function Sidebar({ setHeatProp, setColor, markers, setMarkers, zones, setZones, osm, setOSM, heatmap, setHeatmap }) {

	return (
		<aside className="w-96 bg-floral/60 backdrop-blur-sm border-r border-sage/20 h-full pt-10 px-6 sticky top-0 sidebar-root">
			<div className="space-y-6 overflow-y-auto h-full px-1">
				<div className="flex items-center justify-between">
					<h2 className="text-2xl font-serif font-bold text-brunswick">Map Layers</h2>
					<button className="text-brunswick/70 hover:text-brunswick" aria-label="close-sidebar">
						{/* decorative close - leave for future */}
						×
					</button>
				</div>

				<div className="bg-white/5 p-4 rounded-2xl border border-sage/10">
					<label className="block text-sm text-brunswick/80 mb-2">Select heatmap property</label>
					<select onChange={(e) => setHeatProp(e.target.value)} className="w-full bg-transparent border border-sage/20 rounded-lg px-3 py-2 text-brunswick">
						<option value="health_facilities">Health Facilities</option>
						<option value="education_facilities">Education Facilities</option>
						<option value="housing">Housing</option>
						<option value="air_pollution">Air Pollution</option>
						<option value="none">None</option>
					</select>
					<p className="text-xs text-brunswick/60 mt-2">Choose a property to display in the heatmap</p>
				</div>

				<div className="bg-white/5 p-4 rounded-2xl border border-sage/10">
					<label className="block text-sm text-brunswick/80 mb-2">Select color gradient</label>
					<select onChange={(e) => setColor(e.target.value)} className="w-full bg-transparent border border-sage/20 rounded-lg px-3 py-2 text-brunswick">
						<option value="hot">Red Green</option>
						<option value="cool">Blue</option>
					</select>
					<p className="text-xs text-brunswick/60 mt-2">Choose the color to represent high/large value in the heatmap</p>
				</div>

				<div className="bg-white/5 p-4 rounded-2xl border border-sage/10">
					<div className="flex items-center justify-between mb-3">
						<h3 className="text-lg font-medium text-brunswick">Points to show</h3>
						<span className="text-xs text-brunswick/60">multiple</span>
					</div>

					<div className="space-y-3">

						<label key="markers" className="flex items-center space-x-3 text-brunswick">
							<input
								type="checkbox"
								checked={markers}
								onChange={(e) => setMarkers(e.target.checked)}
								className="w-4 h-4 text-sage bg-white/5 border-sage/20 rounded"
							/>
							<span className="text-sm flex items-center gap-1">
								<MapPin className="w-4 h-4 text-red-500" />
								Dumping Sites
							</span>
						</label>

						<label key="osm" className="flex items-center space-x-3 text-brunswick">
							<input
								type="checkbox"
								checked={osm}
								onChange={(e) => setOSM(e.target.checked)}
								className="w-4 h-4 text-sage bg-white/5 border-sage/20 rounded"
							/>
							<span className="text-sm">OpenStreeMap Background</span>
						</label>

						<label key="heatmap" className="flex items-center space-x-3 text-brunswick">
							<input
								type="checkbox"
								checked={heatmap}
								onChange={(e) => setHeatmap(e.target.checked)}
								className="w-4 h-4 text-sage bg-white/5 border-sage/20 rounded"
							/>
							<span className="text-sm">Heatmap</span>
						</label>

						<label key="zones" className="flex items-center space-x-3 text-brunswick">
							<input
								type="checkbox"
								checked={zones}
								onChange={(e) => setZones(e.target.checked)}
								className="w-4 h-4 text-sage bg-white/5 border-sage/20 rounded"
							/>
							<span className="text-sm">Zones</span>
						</label>

					</div>

					<p className="text-xs text-brunswick/60 mt-3">Click on the blue markers to get more info</p>
				</div>

			</div>
		</aside>
	)
}

export default Sidebar