import "leaflet/dist/leaflet.css";
import "./Map.css";
import { useState } from 'react'
import Container from './Container'
import Sidebar from "./Sidebar";

function Map() {
	let [zoom, setZoom] = useState("7");
	let [osm, setOSM] = useState(true);
	let [markers, setMarkers] = useState(false);
	let [heatmap, setHeatmap] = useState(true);
	let [heatProp, setHeatProp] = useState("health_facilities");
	let [color, setColor] = useState("hot");
	let [zones, setZones] = useState(true);
	// let [pollution, setPollution] = useState(true);
	console.log(heatProp, color);

	return (

		<div className="flex h-screen pt-16">
			<Sidebar {...{
				setHeatProp, setColor, zoom, setZoom, markers, setMarkers, zones, setZones, osm, setOSM, heatmap, setHeatmap
			}}></Sidebar>
			<Container {...{ heatProp, color, zoom, markers, zones, osm, heatmap }} />
		</div>
	)
}

export default Map
