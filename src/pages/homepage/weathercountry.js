import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../homepage/weathercountry.css'
const Country = ({
  name, states, iso3,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => navigate('/states', { state: { name } })}
      onKeyDown={() => navigate('/states', { state: { name } })}
      tabIndex="0"
      role="button"
      aria-pressed="false"
    >
      <h3 className="card-title">
        {name}
      </h3>
      <div className="card-body">
        <p className="card-text">
          Iso:
          {' '}
          {iso3}
        </p>
        <p className="card-text">
          States:
          {states.length}
        </p>
      </div>
    </div>
  );
};
Country.propTypes = {
  name: PropTypes.string.isRequired,
  states: PropTypes.arrayOf(PropTypes.string).isRequired,
  iso3: PropTypes.string.isRequired,
};

export default Country;