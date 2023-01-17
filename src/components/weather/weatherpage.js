import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentWeather } from '../../redux/weatherList';
import WeatherItem from './weatheritem';
import { v4 as uuidv4 } from 'uuid';
const WeatherPage = () => {
    const [search, setSearch] = useState('');
    const weather = useSelector((state) => state.weather.weather);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCurrentWeather(search));
    }, [dispatch,search]);
    
    return (
        <div className="context">
            <div className="search">
                <input
                    className="input"
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search City" value={search}
                />
    
          
                {weather
                    .filter((weather) => {
                        if (search === '') {
                            return weather;
                        } if (
                            weather.cities.toLowerCase().includes(search.toLowerCase())
                        ) {
                            return weather;
                        }
                        return null;
                    })
                    .map((weather) => (
                        <Link
                            key={uuidv4()}
                            to={`/weather/${weather.city}`}
                            aria-hidden="true"
                        >
                            <WeatherItem title={weather.cities} temp={weather.temp} />
                        </Link>
                    ))}
            </div>
            </div>
            
    );
};
export default WeatherPage;