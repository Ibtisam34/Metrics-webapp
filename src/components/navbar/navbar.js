import React from 'react';
import { useNavigate } from 'react-router-dom';
import sun from '../images/sun.png';
import temp from '../images/temp.png';
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="weather-navbar-container">
            <div className="weather-navbar-back-button" onClick={() => navigate('/')}>
                <p>Back</p>
            </div>
            <h2 className="weather-navbar-heading">Weather App</h2>
            <div className="weather-navbar-icons-container">
                <img src={sun} alt="sun" className="weather-navbar-icon"/>
                <img src={temp} alt="temp" className="weather-navbar-icon"/>
            </div>
        </div>
    );
};
export default Navbar;









