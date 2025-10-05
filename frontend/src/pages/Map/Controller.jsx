import { useMap } from 'react-leaflet'
import * as L from "leaflet";

function Controller({ country, zoom }) {
	console.log(country, zoom)
	let map = useMap();

let clickMarker = null;

map.on('click', function(e) {
  const { lat, lng } = e.latlng;
  if (clickMarker) map.removeLayer(clickMarker);
  clickMarker = L.marker([lat, lng]).addTo(map);

  const district = getDistrict(lat, lng);
  if (district === 'kathmandu') showKathmandu();
  else if (district === 'sindhupalchowk') showSindhupalchowk();
  else if (district === 'kailali') showKailali();
  else alert(`No district data for clicked location (${lat.toFixed(2)}, ${lng.toFixed(2)}))`);
});
	// map.flyTo([28.574, 80.807], zoom, {
	// 	animate: true,
	// 	duration: 1,
	// });
}

export default Controller