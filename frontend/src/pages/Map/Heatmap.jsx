import { useMap } from 'react-leaflet'
import { useEffect } from 'react'
import 'leaflet.heat'
import L from "leaflet";

function Heatmap({ data }) {

	// console.log(data);
	console.log("Heatmap Rendered");
	const map = useMap();
  useEffect(() => {
		const layer = 	L.heatLayer(data, { radius: 50, minOpacity: 0.2, max: 500, gradient: { 0.4: 'blue', 0.65: 'lime', 1: 'red' } });

    layer.addTo(map);

    return () => layer.remove();
  }, [map, data]);

	return null
}

export default Heatmap