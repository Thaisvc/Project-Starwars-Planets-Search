// import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchApiPlanetList from '../Service/planetsAPI';
import starwarsContext from './starwarsContext';

function starwarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const requestPlanets = async () => {
    const { results } = await fetchApiPlanetList();
    setPlanets(results);
  };

  useEffect(() => {
    requestPlanets();
  }, []);

  const context = {
    planets,
  };

  return (
    <starwarsContext.Provider value={ context }>
      { children }
    </starwarsContext.Provider>
  );
}

export default starwarsProvider;
