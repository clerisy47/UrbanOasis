import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import './Map.css'
import Heatmap from './Heatmap'
import municipalities from "./assets/municipalities.json";
import districts from "./assets/districts.json";
import districtsData from "./assets/districtData.json";
import municipalityData from "./assets/municipalityData.json";

let showDistricts = 1;
let data = showDistricts ? districtsData : municipalityData;
let property = showDistricts ? "temperature" : "2021 Density";
let name = showDistricts ? "DIST_EN" : "NAME";
let minValue = data["min"][property];
let maxValue = data["max"][property];

function Map() {

	const setLayer = (feature, layer) => {
		layer.bindPopup(feature.properties[name]);
	}

	const setStyle = (feature) => {
		let id = feature.properties[name];
		let value, rgbColor;
		if (id === null || ['national-park', 'wildlife-reserve', 'wildlife-reserve\n', 'hunting-reserve'].includes(feature.properties["LEVEL"])) {
			rgbColor = "white";
		}
		else if (id.toLowerCase().replace(" gaunpalika", "").replace(" nagarpalika", "") in data) {
			id = id.toLowerCase().replace(" gaunpalika", "").replace(" nagarpalika", "");
			value = data[id][property];
			value = (value - minValue) / maxValue;
			let red = value * 200;
			let blue = (1.0 - value) * 200;
			rgbColor = "rgb(" + red + ",0," + blue + ")";
		}
		else {
			rgbColor = "white";
		}
		return { weight: 0.2, fillColor: rgbColor, fillOpacity: 0.75, color: "black", maxValue: 100}
	}

	return (
		<MapContainer center={[28.574, 80.807]} zoom={8}>
			<tilelayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">openstreetmap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<GeoJSON data={showDistricts ? districts : municipalities} style={setStyle} onEachFeature={setLayer} />
			<Heatmap />
		</MapContainer>
	)
}

export default Map
