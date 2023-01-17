import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Weatherpage from './components/weather/weatherpage';
import WeatherDetails from './components/weather/weatherDetails';
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Weatherpage />} />
                <Route path="/weather/:city" element={<WeatherDetails />} />
            </Routes>
        </Router>
    );
}
export default App;









