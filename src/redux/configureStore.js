import { combineReducers } from 'redux';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import countriesReducers from '../redux/countriesState/countriesState';
import weatherReducer from './weatherState/weatherState';

const rootReducer = combineReducers({
  countries: countriesReducers,
  stateWeather: weatherReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;