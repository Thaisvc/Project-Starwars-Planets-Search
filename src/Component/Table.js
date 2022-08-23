import React, { useContext } from 'react';
import TableContext from '../Context/StarwarsContext';

function Table() {
  const {
    planets,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    handleFilter,

  } = useContext(TableContext);

  const handleChange = ({ target }) => {
    setFilterByName({ name: target.value });
  };

  const handleChangeFilter = ({ target }) => {
    const { name, value } = target;
    setFilterByNumericValues({ ...filterByNumericValues, [name]: value });
  };

  return (
    <div>
      <h3>Star Wars Project</h3>
      <label htmlFor="inputText">
        <input
          type="text"
          value={ filterByName.name }
          onChange={ handleChange }
          name="inputText"
          data-testid="name-filter"
          placeholder="search"
        />
      </label>
      <select data-testid="column-filter" onChange={ handleChangeFilter } name="column">
        Coluna
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleChangeFilter }
        name="comparison"
      >
        Operador
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <label htmlFor="value-filter">
        <input
          type="number"
          data-testid="value-filter"
          defaultValue="0"
          onChange={ handleChangeFilter }
          name="value"
        />
      </label>
      <button type="button" data-testid="button-filter" onClick={ handleFilter }>
        Filtrar
      </button>
      <table>
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
          {planets
            .map((planet, index) => (
              <tr key={ index }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
