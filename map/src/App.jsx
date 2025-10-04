import './App.css'
import Map from './Map.jsx'
import Sidebar from './Sidebar.jsx'

function App() {
	console.log("App rendered")

	return (
		<div id="layout">
			<Sidebar></Sidebar>
			<Map></Map>
		</div>
	)
}

export default App
