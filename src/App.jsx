import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomePage from './components/HomePage.jsx'
import CityDetails from './components/CityDetails.jsx'
import Capoluoghi from './components/Capoluoghi.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  

  return (
  
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/capoluoghi" element={<Capoluoghi />} />
        <Route path="/details/:city" element={<CityDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
