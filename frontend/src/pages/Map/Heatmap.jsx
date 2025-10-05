import { useMap } from 'react-leaflet'
import { useEffect } from 'react'
import 'leaflet.heat'
import L from "leaflet";

const maxValue = {
	"air_pollution": 100,
	"health_facilities": 1,
	"education_facilities": 1,
}

function Heatmap({ heatData, heatmapProp }) {
	let data = heatData.filter(item => item["type"] === heatmapProp);
	// console.log(data);
	console.log("Heatmap Rendered");
	const map = useMap();
	useEffect(() => {
		const layer = L.heatLayer(data.map(item => [item.latitude, item.longitude, item.value]),
			{ radius: 20, minOpacity: 0.2, max: maxValue[heatmapProp], gradient: { 0.4: 'blue', 0.65: 'lime', 1: 'red' } }
		);

		layer.addTo(map);

		return () => layer.remove();
	}, [map, data, heatmapProp]);

	return null
}

export default Heatmap