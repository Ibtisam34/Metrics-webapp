import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Country from './weathercountry';
import { getCountries } from '../../redux/countriesState/countriesState';
import './weathercountries.css';

const Countries = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  const countries = useSelector((state) => (state.countries));
  return (
    <div
      className="countries-section"
      data-testid="countries-wrapper"
    >
      <div
        className="header-section"
      >
        <h1 className="title-header">World Weather</h1>
        <p className="choose-country">Choose a country</p>
      </div>
      <div className="country-list-header">
        <h2 className="country-list-title">Countries</h2>
      </div>
      <div className="country-card-container">
        {Object.values(countries).map((country) => (
          <Country
            key={country.iso3}
            name={country.name}
            states={country.states}
            iso3={country.iso3}
          />
        ))}
      </div>
    </div>
  );
};
export default Countries;
