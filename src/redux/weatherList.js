import { createAsyncThunk } from '@reduxjs/toolkit';
const GET_CURRENT_WEATHER = 'weather/weather/GET_CURRENT_WEATHER';
const apiKey = '8a0337329183431caf8105851231701';
const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;
const initialState = { weather: {} };
const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_WEATHER:
            return {
                ...state,
                weather: action.weather,
            };
        default:
            return state;
    }
};
export const getCurrentWeather = createAsyncThunk(
    GET_CURRENT_WEATHER,
    async (city, { dispatch }) => {
        const response = await fetch(`${url}${city}&aqi=yes`);
        const data = await response.json();
        dispatch({ type: GET_CURRENT_WEATHER, weather: data });
    }
);
export default weatherReducer;







