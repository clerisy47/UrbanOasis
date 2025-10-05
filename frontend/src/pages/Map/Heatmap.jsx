import { useMap } from 'react-leaflet'
import { useEffect, useCallback } from 'react'
import 'leaflet.heat'
import L from "leaflet";

const maxValue = {
	"air_pollution": 100,
	"health_facilities": 1,
	"education_facilities": 1,
	"education_health": 1,
	"housing": 2,
}

const r = 20;
const radius = {
	"air_pollution": r,
	"health_facilities": r,
	"education_facilities": r,
	"education_health": r,
	"housing": r,
}

function Heatmap({ heatData, heatmapProp, hotorcold }) {
	const getGradient = useCallback((temp) => {
		if (temp === "hot") return {0.4: 'blue', 0.65: 'lime', 1: 'red'};
		else return {0.4: '#00ff00', 0.65: '#0000ff', 1: '#800080'}
	}, [])
	let data;
	console.log(heatmapProp)
	if (heatmapProp == "education_health") {
		data = heatData.filter(item => item["type"] === "education_facilities" || item["type"] === "health_facilities");
		console.log(data.length)
		// data = data.slice(0, 10000)
	}
	else {
		data = heatData.filter(item => item["type"] === heatmapProp);
		console.log(data.length)
		// data = data.slice(0, 10000);
	}
	// console.log(data);
	console.log("Heatmap Rendered");
	const map = useMap();
	useEffect(() => {
		const layer = L.heatLayer(data.map(item => [item.latitude, item.longitude, item.value]),
			{ radius: radius[heatmapProp], minOpacity: 0.2, max: maxValue[heatmapProp], gradient: getGradient(hotorcold) }
		);

		layer.addTo(map);

		return () => layer.remove();
	}, [map, data, heatmapProp, getGradient, hotorcold]);

	return null
}

export default Heatmap