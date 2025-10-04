import { useMap } from 'react-leaflet'
import { useState, useEffect } from 'react'
import 'leaflet.heat'
import * as L from "leaflet";

let testData = [
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
]

function Heatmap() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/parameters/")
      .then((response) => response.json())
      .then((response) => setData(response.map(item => [item.latitude, item.longitude, item.value])))
      .catch((error) => console.error(error));
  }, []);

	console.log(data);
	console.log("Heatmap Rendered");
	let map = useMap();
	L.heatLayer(data, { radius: 50, minOpacity: 0.2, max: 1000, gradient: { 0.4: 'blue', 0.65: 'lime', 1: 'red' } }).addTo(map);
}

export default Heatmap