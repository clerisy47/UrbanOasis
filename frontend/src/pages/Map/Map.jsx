import "leaflet/dist/leaflet.css";
import "./Map.css";
import { useState } from 'react'
import Container from './Container'
import Sidebar from "./Sidebar";

function Map() {
	let [zoom, setZoom] = useState("7");
	let [osm, setOSM] = useState(true);
	let [markers, setMarkers] = useState(true);
	let [education, setEducation] = useState(false);
	let [health, setHealth] = useState(false);
	let [heatmap, setHeatmap] = useState(true);
	let [heatmapProp, setHeatmapProp] = useState("air_pollution");
	let [zones, setZones] = useState(false);
	// let [pollution, setPollution] = useState(true);

	return (

		<div className="flex h-screen pt-16">
			<Sidebar {...{
				setHeatmapProp, zoom, setZoom, markers, setMarkers, zones, setZones, osm, setOSM, heatmap, setHeatmap,
				health, setHealth, education, setEducation
			}}></Sidebar>
			<Container {...{ heatmapProp, zoom, markers, zones, osm, heatmap, health, education }} />
		</div>
	)
}

export default Map
