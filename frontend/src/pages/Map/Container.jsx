import { MapContainer, TileLayer, GeoJSON, Marker, Popup, LayersControl, LayerGroup, Circle, Rectangle, FeatureGroup } from 'react-leaflet';
import "./Container.css";
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

// Helper function to create popup dynamically
function createPopup(title, contentHTML) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
      <div class="popup-header">
        <h2>${title}</h2>
        <span class="close-btn" onclick="this.parentElement.parentElement.remove()">✖</span>
      </div>
      <div class="popup-content">${contentHTML}</div>
    `;
    document.body.appendChild(popup);
  
    // Make popup draggable
    let isDragging = false, offsetX, offsetY;
    popup.querySelector('.popup-header').onmousedown = (e) => {
      isDragging = true;
      offsetX = e.clientX - popup.offsetLeft;
      offsetY = e.clientY - popup.offsetTop;
    };
    document.onmousemove = (e) => {
      if (isDragging) {
        popup.style.left = `${e.clientX - offsetX}px`;
        popup.style.top = `${e.clientY - offsetY}px`;
      }
    };
    document.onmouseup = () => (isDragging = false);
  }
  
  // -------------------- DISTRICT POPUPS --------------------
  
  // Kathmandu
  function showKathmandu() {
    const content = `
    <ul>
      <li><b>Environmental Factors:</b>
        <ul>
          <li>Air Quality: PM₂.₅ ~83 µg/m³ (score ~6/100)</li>
          <li>Flood Risk: Moderate flash floods (score ~60)</li>
          <li>Precipitation: ~1500–1800 mm/year (score ~50)</li>
          <li>Temperature Trends: Heat island effects (score ~30)</li>
        </ul>
      </li>
      <li><b>Social Factors:</b>
        <ul>
          <li>Population: 2.04 M (~5169/km², score ~10)</li>
          <li>Literacy: ~90% (score ~90)</li>
          <li>Green Space: Limited (<10 m²/person, score ~20)</li>
        </ul>
      </li>
      <li><b>Infrastructure & Resources:</b>
        <ul>
          <li>Waste Management: ~60% coverage (score ~60)</li>
          <li>Water Supply: ~91% coverage (score ~91)</li>
        </ul>
      </li>
      <li><b>Climate Resilience:</b>
        <ul>
          <li>Heat Vulnerability: High (score ~30)</li>
          <li>Flood Preparedness: Moderate (score ~50)</li>
        </ul>
      </li>
    </ul>
    <h3>Sustainability Index: 49/100</h3>
    <table>
      <tr><th>Individual</th><th>Urban Planner</th></tr>
      <tr>
        <td>Use clean energy, segregate waste, conserve water, plant trees, use public transport.</td>
        <td>Expand public transport, increase green space, upgrade waste systems, improve drainage, enforce building codes, promote rooftop solar.</td>
      </tr>
    </table>
    <div style="margin-top: 20px; text-align: center; padding-top: 15px; border-top: 1px solid #ddd;">
      <button onclick="window.location.href='/districts/kathmandu'"
              style="background: linear-gradient(135deg, #10B981, #059669); color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        📊 Full Analysis
      </button>
    </div>`;
    createPopup("Kathmandu District Sustainability", content);
  }
  
  // Sindhupalchowk
  function showSindhupalchowk() {
    const content = `
    <ul>
      <li><b>Environmental Factors:</b>
        <ul>
          <li>Air Quality: Clean (score ~100)</li>
          <li>Flood/Landslide Risk: Very high (score ~10)</li>
          <li>Precipitation: Heavy monsoon/snow (score ~30)</li>
          <li>Temperature Trends: Warming mountains (score ~50)</li>
        </ul>
      </li>
      <li><b>Social Factors:</b>
        <ul>
          <li>Population: ~262,624 (103/km², score ~80)</li>
          <li>Literacy: ~63% (score ~63)</li>
          <li>Green Space: Extensive forests (~100)</li>
        </ul>
      </li>
      <li><b>Infrastructure & Resources:</b>
        <ul>
          <li>Waste Management: Minimal (score ~5)</li>
          <li>Water Supply: ~50% coverage (score ~50)</li>
        </ul>
      </li>
      <li><b>Climate Resilience:</b>
        <ul>
          <li>Heat Vulnerability: Low (score ~80)</li>
          <li>Flood Preparedness: Limited (score ~20)</li>
        </ul>
      </li>
    </ul>
    <h3>Sustainability Index: 52/100</h3>
    <table>
      <tr><th>Individual</th><th>Urban Planner</th></tr>
      <tr>
        <td>Use improved stoves, manage waste, join community forestry, conserve water, prepare emergency kits.</td>
        <td>Expand piped water, build compost units, stabilize slopes, improve drainage, expand electricity, support literacy, integrate disaster-risk maps.</td>
      </tr>
    </table>
    <div style="margin-top: 20px; text-align: center; padding-top: 15px; border-top: 1px solid #ddd;">
      <button onclick="window.location.href='/districts/sindhupalchok'"
              style="background: linear-gradient(135deg, #10B981, #059669); color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        📊 Full Analysis
      </button>
    </div>`;
    createPopup("Sindhupalchowk District Sustainability", content);
  }
  
  // Kailali
  function showKailali() {
    const content = `
    <ul>
      <li><b>Environmental Factors:</b>
        <ul>
          <li>Air Quality: PM₂.₅ ~50–60 µg/m³ (score ~10)</li>
          <li>Flood Risk: High (score ~20)</li>
          <li>Precipitation: Heavy (~1300–1600 mm, score ~30)</li>
          <li>Temperature Trends: Hot plains, heatwaves (score ~40)</li>
        </ul>
      </li>
      <li><b>Social Factors:</b>
        <ul>
          <li>Population: ~904,666 (280/km², score ~50)</li>
          <li>Literacy: ~77.6% (score ~78)</li>
          <li>Green Space: High (~100)</li>
        </ul>
      </li>
      <li><b>Infrastructure & Resources:</b>
        <ul>
          <li>Waste Management: ~50% coverage (score ~50)</li>
          <li>Water Supply: ~91% coverage (score ~91)</li>
        </ul>
      </li>
      <li><b>Climate Resilience:</b>
        <ul>
          <li>Heat Vulnerability: Moderate (score ~50)</li>
          <li>Flood Preparedness: Modest (score ~40)</li>
        </ul>
      </li>
    </ul>
    <h3>Sustainability Index: 55/100</h3>
    <table>
      <tr><th>Individual</th><th>Urban Planner</th></tr>
      <tr>
        <td>Reduce open burning, use masks, maintain drains, adopt water-saving farming, raise homes, plant trees.</td>
        <td>Expand flood control, promote resilient crops, improve waste and water systems, plan green urban growth, integrate heat mitigation.</td>
      </tr>
    </table>
    <div style="margin-top: 20px; text-align: center; padding-top: 15px; border-top: 1px solid #ddd;">
      <button onclick="window.location.href='/districts/kailali'"
              style="background: linear-gradient(135deg, #10B981, #059669); color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        📊 Full Analysis
      </button>
    </div>`;
    createPopup("Kailali District Sustainability", content);
  }

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
		switch (feature.properties[name]) {
			case "Kathmandu":
				layer.on('click', () => {
					console.log("Kathmandu clicked. Redirecting...")
					showKathmandu();
				})
				break;
			case "Sindhupalchok":
				layer.on('click', () => {
					console.log("Sindhupalchok clicked. Redirecting...")
					showSindhupalchowk();
				})
				break;
			case "Kailali":
				layer.on('click', () => {
					console.log("Kailali clicked. Redirecting...")
					showKailali();
				})
				break;
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
