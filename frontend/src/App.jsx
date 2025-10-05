import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Map from './pages/Map/Map'
import Quiz from './pages/Quiz'
import Navbar from './components/Navbar'
import Kathmandu from './pages/districts/Kathmandu'
import Sindhupalchok from './pages/districts/Sindhupalchok'
import Kailali from './pages/districts/Kailali'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/districts/kathmandu" element={<Kathmandu />} />
          <Route path="/districts/sindhupalchok" element={<Sindhupalchok />} />
          <Route path="/districts/kailali" element={<Kailali />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
