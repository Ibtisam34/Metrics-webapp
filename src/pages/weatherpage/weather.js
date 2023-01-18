import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5';
import { getWeather } from '../../redux/weatherState/weatherState';
import './weather.css';

const Weather = ({ name }) => {
  const location = useLocation();
  const stateName = location.state.name;
  const locationName = name || stateName;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeather(locationName));
  }, [dispatch, locationName]);
  const weatherInfo = useSelector((state) => (state.stateWeather));
  if (!weatherInfo.weather) {
    return <p className="loading">loading...</p>;
  }
  return (
    <div className="weather-container">
      <ul className="weather-info">
        <li className="weather-image">
          <img src={weatherInfo.weather.condition.icon} alt="weater condition" className="weather-condition-icon" />
          <div>
            <div>
              <div>
                <h4 className="weather-condition-text">
                  {weatherInfo.weather.condition.text}
                </h4>
              </div>
              <h1 className="temp weather-temp-c">
                {weatherInfo.weather.temp_c}
              </h1>
              <p className="weather-temp-f">
                {weatherInfo.weather.temp_f}
              </p>
            </div>
            <h2 className="location-name">
              {weatherInfo.name}
            </h2>
            <div className="location-time">
              Localtime:
              {' '}
              {weatherInfo.localtime}
            </div>
            <div className="location-time">
              Last Updated:
              {' '}
              {weatherInfo.weather.last_updated}
            </div>
          </div>
        </li>
        <li className="location-container">
          <div>
            <h4 className="location-region">
              Region:
              {' '}
              {weatherInfo.region}
            </h4>
            <div className="location-coordinate">
              <p className="location-lat">
                Lat:
                {' '}
                {weatherInfo.lat}
              </p>
              <p className="location-lon">
                Lon:
                {' '}
                {weatherInfo.lon}
              </p>
            </div>
          </div>
          <div className="location-icon">
            <IoLocationSharp className="location-icon-img" />
          </div>
        </li>
        <h4 className="condition">
          Condition:
        </h4>
        <li className="condition-container">
          <div className="condition-cloud">
            Cloud:
            {' '}
            {weatherInfo.weather.cloud}
          </div>
          <div className="condition-feelslike">
            Feelslike_c:
            {' '}
            {weatherInfo.weather.feelslike_c}
          </div>
          <div className="condition-pressure-in">
            Pressure in:
            {' '}
            {weatherInfo.weather.pressure_in}
          </div>
          <div className="condition-pressure-mb">
            Pressure mb:
            {' '}
            {weatherInfo.weather.pressure_mb}
          </div>
          <div className="condition-uv">
            UV:
            {' '}
            {weatherInfo.weather.uv}
          </div>
        </li>
        <li className="air-quality-container">
          <h4 className="air-quality-title">
            Air quality
          </h4>
          <div className="air-quality-co">
            Co:
            {' '}
            {weatherInfo.weather.air_quality.co}
          </div>
          <div className="air-quality-no2">
            NO2:
            {' '}
            {weatherInfo.weather.air_quality.no2}
          </div>
          <div className="air-quality-o3">
            O3:
            {' '}
            {weatherInfo.weather.air_quality.o3}
          </div>
          <div className="air-quality-pm2_5">
            pm2_5:
            {' '}
            {weatherInfo.weather.air_quality.pm2_5}
          </div>
        </li>
      </ul>
    </div>
  );
};
Weather.propTypes = {
  name: PropTypes.string,
};
Weather.defaultProps = {
  name: '',
};
export default Weather;
