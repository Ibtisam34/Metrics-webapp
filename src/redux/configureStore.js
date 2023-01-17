import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import weatherReducer from './weatherList';
const root = combineReducers({
weather: weatherReducer,
});
const store = configureStore({
reducer: root,
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;