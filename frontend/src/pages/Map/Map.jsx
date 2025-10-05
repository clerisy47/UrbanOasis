import "leaflet/dist/leaflet.css";
import "./Map.css";
import { useState } from 'react'
import Container from './Container'
import Sidebar from "./Sidebar";

function Map() {
	let [country, setCountry] = useState("Nepal");
	let [zoom, setZoom] = useState("7");
	let [osm, setOSM] = useState(true);
	let [markers, setMarkers] = useState(true);
	let [heatmap, setHeatmap] = useState(true);
	let [zones, setZones] = useState(true);
	// let [pollution, setPollution] = useState(true);

	return (

		<div className="flex h-screen pt-16">
			<Sidebar setCountry={setCountry} zoom={zoom} setZoom={setZoom} markers={markers} setMarkers={setMarkers} zones={zones} setZones={setZones} osm={osm} setOSM={setOSM} heatmap={heatmap} setHeatmap={setHeatmap}></Sidebar>
			<Container country={country} zoom={zoom} markers={markers} zones={zones} osm={osm} heatmap={heatmap}/>
		</div>
	)
}

export default Map
