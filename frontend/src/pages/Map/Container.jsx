import { MapContainer, TileLayer, GeoJSON, Marker, Popup, LayersControl, LayerGroup, Circle, Rectangle, FeatureGroup } from 'react-leaflet';
// import "./Container.css";
import Heatmap from "./Heatmap";
import Controller from './Controller';
import municipalities from "../../assets/municipalities.json";
import districts from "../../assets/districts.json";
import districtsData from "../../assets/districtData.json";
import municipalityData from "../../assets/municipalityData.json";
import { useState, useEffect } from 'react'

let showDistricts = 1;
let data = showDistricts ? districtsData : municipalityData;
let property = showDistricts ? "temperature" : "2021 Density";
let name = showDistricts ? "DIST_EN" : "NAME";
let minValue = data["min"][property];
let maxValue = data["max"][property];

function Container({ country, zoom, osm, markers, zones, heatmap }) {
	const center = [28.0, 84.0]

  const [heatData, setHeatData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/parameters/")
      .then((response) => {
				console.log("fetching data")
				return response.json()
			})
      .then((response) => setHeatData(response.map(item => [item.latitude, item.longitude, item.value])))
      .catch((error) => console.error(error));
  }, []);

	const setLayer = (feature, layer) => {
		if (feature.properties[name] == "Kathmandu") {
			layer.bindPopup("show")
			return
		}
		layer.bindPopup(feature.properties[name]);
	}

	const setStyle = (feature) => {
		let id = feature.properties[name];
		let value, rgbColor;
		if (id === null || ['national-park', 'wildlife-reserve', 'wildlife-reserve\n', 'hunting-reserve', 'hungint-reserve'].includes(feature.properties["LEVEL"])) {
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
			console.log(id, feature.properties["LEVEL"]);
			rgbColor = "white";
		}
		return { weight: 0.2, fillColor: rgbColor, fillOpacity: 0.75, color: "black", maxValue: 100 }
	}

	return (
		<div className="h-full flex-2 p-10">
			<MapContainer
				center={center}
				className="h-full"
				zoom={zoom}
			>
				<Controller country={country} zoom={zoom} markers={markers} zones={zones} />
				{osm &&
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
				}
				{markers &&
					<Marker position={center}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				}
				{zones &&
					<GeoJSON data={showDistricts ? districts : municipalities} style={setStyle} onEachFeature={setLayer} />
				}
				{heatmap &&
					<Heatmap data={heatData} />
				}
			</MapContainer>

		</div>
	)
}

export default Container
