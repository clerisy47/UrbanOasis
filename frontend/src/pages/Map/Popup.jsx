import "./Popup.css";

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
      <li><a id="kathmandu-link" style="color: blue; text-decoration:underline; cursor:pointer">Learn More</a>
      </li>
    </ul>
    <h3>Sustainability Index: 49/100</h3>
    <table>
      <tr><th>Individual</th><th>Urban Planner</th></tr>
      <tr>
        <td>Use clean energy, segregate waste, conserve water, plant trees, use public transport.</td>
        <td>Expand public transport, increase green space, upgrade waste systems, improve drainage, enforce building codes, promote rooftop solar.</td>
      </tr>
    </table>`;
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
      <li><a id="sindhupalchowk-link" style="color: blue; text-decoration:underline; cursor:pointer">Learn More</a>
      </li>
    </ul>
    <h3>Sustainability Index: 52/100</h3>
    <table>
      <tr><th>Individual</th><th>Urban Planner</th></tr>
      <tr>
        <td>Use improved stoves, manage waste, join community forestry, conserve water, prepare emergency kits.</td>
        <td>Expand piped water, build compost units, stabilize slopes, improve drainage, expand electricity, support literacy, integrate disaster-risk maps.</td>
      </tr>
    </table>`;
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
      <li><a id="kailali-link" style="color: blue; text-decoration:underline; cursor:pointer">Learn More</a>
      </li>
    </ul>
    <h3>Sustainability Index: 55/100</h3>
    <table>
      <tr><th>Individual</th><th>Urban Planner</th></tr>
      <tr>
        <td>Reduce open burning, use masks, maintain drains, adopt water-saving farming, raise homes, plant trees.</td>
        <td>Expand flood control, promote resilient crops, improve waste and water systems, plan green urban growth, integrate heat mitigation.</td>
      </tr>
    </table>`;
	createPopup("Kailali District Sustainability", content);
}

export {showKailali, showKathmandu, showSindhupalchowk}