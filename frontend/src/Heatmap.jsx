import { useMap } from 'react-leaflet'
import 'leaflet.heat'
import * as L from "leaflet";

function Heatmap() {
	let map = useMap();
	var heat = L.heatLayer([
		[50.5, 30.5, 0.2], // lat, lng, intensity
		[50.6, 30.4, 0.5],
		[50.6, 30.6, 10],
		[50.5, 30.4, 1],
		[28.5, 80.8, 0.3],
		[29.0, 83.9, 1],
		[29.3, 80.8, 3],
		[29.5, 81.1, 4],
		[27.6, 86.3, 100],
		[28.6, 82.3, 8],
	], { radius: 100 }).addTo(map);
	console.log(heat);
}

export default Heatmap