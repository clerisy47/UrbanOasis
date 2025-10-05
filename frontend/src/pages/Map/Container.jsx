import { MapContainer, TileLayer, GeoJSON, Marker } from 'react-leaflet';
import Heatmap from "./Heatmap";
import municipalities from "../../assets/municipalities.json";
import districts from "../../assets/districts.json";
import districtsData from "../../assets/districtData.json";
import municipalityData from "../../assets/municipalityData.json";
import dumpingData from "../../assets/DumpingLocation.json";
import { useState, useEffect } from 'react'
import { showKailali, showKathmandu, showSindhupalchowk } from './Popup'
import L from 'leaflet'
// import { useNavigate } from 'react-router-dom'

let showDistricts = 1;
let data = showDistricts ? districtsData : municipalityData;
let property = showDistricts ? "temperature" : "2021 Density";
let name = showDistricts ? "DIST_EN" : "NAME";
let minValue = data["min"][property];
let maxValue = data["max"][property];


function Container({ heatProp, coldProp, zoom, osm, markers, zones, heatmap, }) {

	const redIcon = new L.Icon({
		iconUrl:
			"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
		shadowUrl:
			"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowSize: [41, 41]
	});

	const center = [28.0, 84.0]
	const [heatData, setHeatData] = useState([]);


	useEffect(() => {
		fetch("/data.json")
			.then((response) => {
				console.log("Fetching mock data...");
				return response.json();
			})
			.then((data) => {
				setHeatData(data);
			})
			.catch((error) => console.error("Error loading mock data:", error));
	}, []);



	// Display popup info on clicking districts
	//
	// const navigate = useNavigate();
	const setLayer = (feature, layer) => {
		switch (feature.properties[name]) {
			case "Kathmandu":
				layer.on('click', () => {
					console.log("Kathmandu clicked. Redirecting...")
					showKathmandu();
					// document.querySelector("#kathmandu-link").addEventListener('click', (e) => {
					// 	document.querySelector(".close-btn").click();
					// 	navigate('/districts/Kathmandu')
					// })
				})
				break;
			case "Sindhupalchok":
				layer.on('click', () => {
					console.log("Sindhupalchok clicked. Redirecting...")
					showSindhupalchowk();
					// document.querySelector("#sindhupalchowk-link").addEventListener('click', (e) => {
					// 	document.querySelector(".close-btn").click();
					// 	navigate('/districts/Sindhupalchok')
					// })
				})
				break;
			case "Kailali":
				layer.on('click', () => {
					console.log("Kailali clicked. Redirecting...")
					showKailali();
					// document.querySelector("#kailali-link").addEventListener('click', (e) => {
					// 	document.querySelector(".close-btn").click();
					// 	navigate('/districts/Kailali')
					// })
				})
				break;
		}
		layer.bindPopup(feature.properties[name]);
	}

	// Return color and properties for displaying zones
	//
	const setStyle = (feature) => {
		if (!zones) {
			return { weight: 0.2, fillOpacity: 0, color: "black", maxValue: 100 }
		}
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

				{osm &&
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
				}

				{markers && dumpingData.map((d) => (
					<Marker position={[d.latitude, d.longitude]} icon={redIcon}>
					</Marker>
				))}

				{zones &&
					<GeoJSON data={showDistricts ? districts : municipalities} style={setStyle} onEachFeature={setLayer} />
				}

				{heatmap && heatProp!="none" && 
					<Heatmap heatData={heatData} heatmapProp={heatProp} hotorcold="hot" />
				}

				{heatmap && coldProp!="none" &&
					<Heatmap heatData={heatData} heatmapProp={coldProp} hotorcold="cold" />
				}

			</MapContainer>

		</div>
	)
}

export default Container
