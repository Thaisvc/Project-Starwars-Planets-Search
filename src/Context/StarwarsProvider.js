import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';
import getPlanets from '../Service/planetsAPI';

function StarwarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterName, setFilter] = useState({ filterByName: { name: '' } });
  // const [filterResults, setFilterResults] = useState([]);

  const [filterByNumericValues, setFilterByNumericValues] = useState(
    {
      column: 'population',
      comparison: 'maior que',
      value: 0,
    },
  );

  const handleChangeFilter = (name) => {
    setFilter(name);
    const filterPlanetName = planets
      .filter((planeta) => planeta.name.toLowerCase().includes(name.toLowerCase()));
    setPlanets(filterPlanetName);
  };

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
      return planet;
    });
    setPlanets(fieldsValue);
  }

  useEffect(() => {
    const fetchPlanets = async () => {
      const dataResult = await getPlanets();
      const filterResult = dataResult
        .map((element) => {
          delete (element.residents);
          return element;
        });

      setPlanets(filterResult);
    };
    return fetchPlanets();
  }, []);

  return (
    <StarwarsContext.Provider
      value={ {
        planets,
        setPlanets,
        filterName,
        handleFilter,
        filterByNumericValues,
        // filterResults,
        setFilterByNumericValues,
        handleChangeFilter,
      } }
    >
      {children}
    </StarwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;
