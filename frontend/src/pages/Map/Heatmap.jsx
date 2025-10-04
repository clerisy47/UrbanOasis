import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import 'leaflet.heat';
import * as L from "leaflet";

function Heatmap() {
    const map = useMap();

    useEffect(() => {
        // Wait for the map to be ready
        if (!map) return;

        // Create the heat layer
        const heat = L.heatLayer([
            [28.5, 80.8, 0.3], // lat, lng, intensity
            [29.0, 83.9, 1],
            [29.3, 80.8, 3],
            [29.5, 81.1, 4],
            [27.6, 86.3, 100],
            [28.6, 82.3, 8],
        ], { 
            radius: 25,
            blur: 15,
            maxZoom: 10,
            minOpacity: 0.4
        });

        // Add the layer to the map
        map.on('layeradd', () => {
            heat.addTo(map);
        });

        // Cleanup function
        return () => {
            if (map && heat) {
                map.removeLayer(heat);
            }
        };
    }, [map]); // Only re-run if map changes

    return null;
}

export default Heatmap;