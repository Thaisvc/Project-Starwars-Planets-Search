import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../Context/StarwarsContext';
import fetchPlanets from '../Service/planetsAPI';

function Table() {
  const [planets, setPlanets] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState([]);

  const {
    filterByName, filterByNumericValues, order,
  } = useContext(PlanetsContext);

  const getPlanets = async () => {
    const response = await fetchPlanets();
    setPlanets(response);
    setFilterPlanets(response);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const filterName = (allPlanets) => allPlanets.filter(({ name }) => (
    name.toLowerCase().includes(filterByName.toLowerCase())));

  const compare = (planet, { column, comparison, value }) => {
    if (comparison === 'igual a') {
      return Number(planet[column]) === Number(value);
    }
    return comparison === 'maior que'
      ? Number(planet[column]) > Number(value)
      : Number(planet[column]) < Number(value);
  };

  const depurar = (allPlanets) => (
    filterName(allPlanets).filter((planet) => (
      filterByNumericValues.every((filters) => (
        compare(planet, filters)))))
  );

  const filtersUnknowns = (planet, column) => planet
    .filter((elem) => elem[column] !== 'unknown')
    .concat(planet.filter((element) => element[column] === 'unknown'));

  const sorting = (allPlanets) => {
    const { column, sort } = order;
    if (sort === 'ASC') {
      const ascSort = allPlanets.sort((a, b) => a[column] - b[column]);
      return filtersUnknowns(ascSort, column);
    }
    const SortA = allPlanets.sort((a, b) => b[column] - a[column]);
    return filtersUnknowns(SortA, column);
  };

  useEffect(() => {
    if (order.sort === '') {
      setFilterPlanets(depurar(planets));
    } else {
      setFilterPlanets(sorting(depurar(planets)));
    }
  }, [filterByName, filterByNumericValues, order]);

  return (
    <table width="1000" align="center" border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {filterPlanets.map((element) => (
          <tr key={ element.name }>
            <td data-testid="planet-name">{element.name}</td>
            <td>{element.rotation_period}</td>
            <td>{element.orbital_period}</td>
            <td>{element.diameter}</td>
            <td>{element.climate}</td>
            <td>{element.gravity}</td>
            <td>{element.terrain}</td>
            <td>{element.surface_water}</td>
            <td>{element.population}</td>
            <td>{element.films}</td>
            <td>{element.created}</td>
            <td>{element.edited}</td>
            <td>{element.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
