import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentWeather} from '../../redux/weatherList';
import WeatherItem from './weatheritem';
const WeatherPage = () => {
    const [search, setSearch] = useState('');
    const { weather } = useSelector((state) => state.weather);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCurrentWeather());
    }, [dispatch]);
    const handleClick = (city) => {
        NavLink=(`/weather/${city}`);
    }
    return (
        <div className="context">
            <div className="search">
                <input
                    className="input"
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search City"
                    value={search}
                />
            </div>
            <div className="container">
                {weather
                    .filter((weather) => {
                        if (search === '') {
                            return weather;
                        } if (
                            weather.city.toLowerCase().includes(search.toLowerCase())
                        ) {
                            return weather;
                        }
                        return null;
                    })
                    .map((weather) => (
                        <div
                            key={uuidv4()}
                            onClick={() => handleClick(weather.city)}
                            aria-hidden="true"
                        >
                            <WeatherItem title={weather.city} temp={weather.temp} />
                        </div>
                    ))}
            </div>
        </div>
    );
};
export default WeatherPage;