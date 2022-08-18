// import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchApiPlanetList from '../Service/planetsAPI';
import StarwarsContext from './StarwarsContext';

function StarwarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const requestPlanets = async () => {
      const data = await fetchApiPlanetList();
      data.forEach((planet) => { delete planet.residents; });
      console.log(data);
      setPlanets(data);
    };
    requestPlanets();
  }, []);

  const context = {
    planets,
  };

  return (
    <StarwarsContext.Provider value={ context }>
      { children }
    </StarwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default StarwarsProvider;
