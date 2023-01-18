import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Header';
import States from './pages/weatherstate/weatherstates';
import Countries from './pages/homepage/weathercountries';
import Weather from './pages/weatherpage/weather';
import './App.css';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="states" element={<States />} />
      <Route path="weather" element={<Weather />} />
    </Routes>
  </>
);

export default App;
