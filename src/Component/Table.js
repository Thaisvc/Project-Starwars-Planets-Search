// import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import StarwarsContext from '../Context/StarwarsContext';

function Table() {
  const { filterResults, filterByNumericValues,
    setFilterByNumericValues,
    handleFilter } = useContext(StarwarsContext);

  const handleChangeFilter = ({ target }) => {
    const { name, value } = target;
    setFilterByNumericValues({ ...filterByNumericValues, [name]: value });
  };
  return (
    <div>
      <h3>Table</h3>
      <div>

        <select data-testid="column-filter" onChange={ handleChangeFilter } name="column">
          Coluna:
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
          Operador:
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>

        <input
          type="number"
          data-testid="value-filter"
          defaultValue="0"
          onChange={ handleChangeFilter }
          name="value"
        />

        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleFilter }
        >
          {' '}
          Filtrar

        </button>
      </div>
      <table width="1000" align="center" border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain </th>
            <th>Surface Water </th>
            <th>Population </th>
            <th>Films </th>
            <th>Created </th>
            <th>Edited </th>
            <th>URL </th>
          </tr>
        </thead>
        <tbody>
          {
            filterResults
              .map((element) => (
                <tr key={ element.name }>
                  <td>{element.name}</td>
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
              ))
          }

        </tbody>
      </table>

    </div>
  );
}

export default Table;
