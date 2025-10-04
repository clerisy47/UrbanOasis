import { useMap } from 'react-leaflet'
import 'leaflet.heat'
import * as L from "leaflet";

function Heatmap() {
	let map = useMap();
	var heat = L.heatLayer([
		[50.5, 30.5, 0.2], // lat, lng, intensity
		[50.6, 30.4, 0.5],
		[50.6, 30.6, 0.1],
		[50.5, 30.4, 0.1],
		[28.5, 80.8, 0.3],
		[29.0, 83.9, 0.3],
		[29.3, 80.8, 0.5],
		[29.5, 81.1, 0.8],
		[28.6, 82.3, 0.1],

		[27.6, 86.3, 0.9],
		[27.605, 86.29, 0.8],
		[27.59, 86.31, 0.3],
		[27.61, 86.3, 0.4],
		[27.59, 86.295, 0.5],
		[27.598, 86.308, 0.6],
		[27.603, 86.315, 0.1],
		[27.593, 86.289, 0.9],
	], { radius: 25, minOpacity: 1, gradient: { 0.4: 'blue', 0.65: 'lime', 1: 'red' } }).addTo(map);
	console.log(heat);
}

export default Heatmap