import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "./Map.css";
import Heatmap from "./Heatmap";
import municipalities from "../../assets/municipalities.json";
import districts from "../../assets/districts.json";

let showDistricts = 1;

function Map() {
	const setColor = ({ properties }) => {
		console.log(properties["NAME"]);
		return { weight: 1 };
	};

	return (
		<MapContainer 
			center={[28.574, 80.807]} 
			zoom={8}
			style={{ height: "100vh", width: "100%" }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<GeoJSON data={showDistricts ? districts : municipalities} style={setColor} />
			<Marker position={[28.574, 80.807]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
			<Heatmap />
		</MapContainer>
	)
}

export default Map
