import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrentWeather } from '../../redux/weatherList';
const WeatherDetails = () => {
    const { city } = useParams();
    const weather = useSelector((state) => state.weather.weather);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCurrentWeather(city));
    }, [dispatch, city]);
    return (
        <div className="weather-details-container">
            {weather ? (
                <>
                    <h1>Weather for {city}</h1>
                    <p>Temperature: {weather.current.temp_c} °C</p>
                    <p>Humidity: {weather.current.humidity}%</p>
                    <p>Wind Speed: {weather.current.wind_mph} mph</p>
                    <p>Description: {weather.current.condition.text}</p>
                </>
            ) : (
                <h1>Loading weather data...</h1>
            )}
        </div>
    );
};
export default WeatherDetails;







