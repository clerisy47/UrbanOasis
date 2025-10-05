import "./Sidebar.css"

function Sidebar({ setCountry, zoom, setZoom, markers, setMarkers, zones, setZones, osm, setOSM, heatmap, setHeatmap }) {

	return (
		<aside className="w-96 bg-floral/60 backdrop-blur-sm border-r border-sage/20 h-full px-6 sticky top-0 sidebar-root">
			<div className="space-y-6 overflow-y-auto h-full pt-5 px-1">
				<div className="flex items-center justify-between">
					<h2 className="text-2xl font-serif font-bold text-brunswick">Map Layers</h2>
					<button className="text-brunswick/70 hover:text-brunswick" aria-label="close-sidebar">
						{/* decorative close - leave for future */}
						×
					</button>
				</div>

				<div className="bg-white/5 p-4 rounded-2xl border border-sage/10">
					<label className="block text-sm text-brunswick/80 mb-2">Select country</label>
					<select onChange={(e) => setCountry(e.target.value)} className="w-full bg-transparent border border-sage/20 rounded-lg px-3 py-2 text-brunswick">
						<option value="nepal">Nepal</option>
						<option value="india">India</option>
						<option value="bangladesh">Bangladesh</option>
						<option value="pakistan">Pakistan</option>
						<option value="sri-lanka">Sri Lanka</option>
					</select>
					<p className="text-xs text-brunswick/60 mt-2">Choose a country to center the map (lat/lng will be set by map logic).</p>
				</div>

				<div className="bg-white/5 p-4 rounded-2xl border border-sage/10">
					<div className="flex items-center justify-between mb-3">
						<h3 className="text-lg font-medium text-brunswick">Points to show</h3>
						<span className="text-xs text-brunswick/60">multiple</span>
					</div>

					<div className="space-y-3">
							<label key="osm" className="flex items-center space-x-3 text-brunswick">
								<input
									type="checkbox"
									checked={osm}
									onChange={(e) => setOSM(e.target.checked)}
									className="w-4 h-4 text-sage bg-white/5 border-sage/20 rounded"
								/>
								<span className="text-sm">OSM</span>
							</label>
							<label key="markers" className="flex items-center space-x-3 text-brunswick">
								<input
									type="checkbox"
									checked={markers}
									onChange={(e) => setMarkers(e.target.checked)}
									className="w-4 h-4 text-sage bg-white/5 border-sage/20 rounded"
								/>
								<span className="text-sm">Markers</span>
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

					<p className="text-xs text-brunswick/60 mt-3">Tip: select multiple layers to compare data on the map.</p>
				</div>

				<div className="bg-white/5 p-4 rounded-2xl border border-sage/10">
					<h3 className="text-lg font-medium text-brunswick mb-3">Filters</h3>
					<div className="space-y-3">
						<div>
							<label className="text-sm text-brunswick/80">Zoom</label>
							<input onChange={(e) => setZoom(e.target.value)} type="range" min="1" max="20" defaultValue={zoom} className="w-full mt-2" />
						</div>

						<div>
							<label className="text-sm text-brunswick/80">Minimum rating</label>
							<select className="w-full bg-transparent border border-sage/20 rounded-lg px-3 py-2 text-brunswick">
								<option value="0">Any</option>
								<option value="3">3+</option>
								<option value="4">4+</option>
								<option value="4.5">4.5+</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</aside>
	)
}

export default Sidebar