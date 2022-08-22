// import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchApiPlanetList from '../Service/planetsAPI';
import StarwarsContext from './StarwarsContext';

function StarwarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterName, setFilterName] = useState({ filterByName: { name: '' } });
  const [filterResults, setFilterResults] = useState([]);

  useEffect(() => {
    const requestPlanets = async () => {
      const data = await fetchApiPlanetList();
      data.forEach((planet) => { delete planet.residents; });
      // console.log(data);
      setPlanets(data);
      setFilterResults(data);
    };
    requestPlanets();
  }, []);

  function handleChangeFilter(name) {
    setFilterName(name);
    const filterPlanetName = planets
      .filter((planeta) => planeta.name.toLowerCase().includes(name.toLowerCase()));
    console.log(name);
    setFilterResults(filterPlanetName);
  }

  const [filterByNumericValues, setFilterByNumericValues] = useState(
    {
      column: 'population',
      comparison: 'maior que',
      value: 0,
    },
  );

  function handleFilter() {
    const { comparison, column, value } = filterByNumericValues;

    const fieldsValue = planets.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value);
      }
      if (comparison === 'igual a') {
        return Number(planet[column]) === Number(value);
      }
      return planet; // console.log( planet);
    });
    setFilterResults(fieldsValue);
  }
  const context = {
    planets,
    handleChangeFilter,
    filterName,
    filterResults,
    handleFilter,
    setFilterByNumericValues,
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
