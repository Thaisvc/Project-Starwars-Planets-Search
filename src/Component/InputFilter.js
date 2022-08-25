import React, { useContext, useEffect, useState } from 'react';
import StarwarsContext from '../Context/StarwarsContext';

const INITIAL_FILTERS = {
  column: 'population',
  comparison: 'maior que',
  value: '0',
};

const INITIAL_COLUMNS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function Filters() {
  const {
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    setOrder,
  } = useContext(StarwarsContext);
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [columnsFilters, setColumnsFilters] = useState(INITIAL_COLUMNS);
  const [orderSelect, setOrderSelect] = useState({
    column: 'population',
    sort: '',
  });

  const saveInputValue = ({ target }, set, saveState) => {
    console.log(set, saveState);
    set({
      ...saveState,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    setFilters({ ...INITIAL_FILTERS, column: columnsFilters[0] });
  }, [columnsFilters]);

  const saveUpdate = (filterSelectd) => {
    setFilterByNumericValues([...filterByNumericValues, filters]);
    const filtersColums = columnsFilters.filter(
      (column) => column !== filterSelectd,
    );
    setColumnsFilters(filtersColums);
  };

  const removeFilter = (selectedFilter) => {
    const refreshFilters = filterByNumericValues.filter(
      ({ column }) => column !== selectedFilter,
    );
    setFilterByNumericValues(refreshFilters);
    setColumnsFilters([...columnsFilters, selectedFilter]);
  };

  const removeAllFilters = () => {
    setColumnsFilters(INITIAL_COLUMNS);
    setFilterByNumericValues([]);
  };

  return (
    <section>
      <div>
        <input
          type="text"
          data-testid="name-filter"
          id="name-filter"
          onChange={ ({ target }) => setFilterByName(target.value) }
        />
        <label htmlFor="column-filter">
          Coluna
          <select
            name="column"
            data-testid="column-filter"
            id="column-filter"
            onChange={ (e) => saveInputValue(e, setFilters, filters) }
            value={ filters.column }
          >
            {columnsFilters.map((column) => (
              <option key={ column }>{column}</option>
            ))}
          </select>
        </label>
        <label htmlFor="comparison-filter">
          Operador
          <select
            name="comparison"
            data-testid="comparison-filter"
            id="comparison-filter"
            onChange={ (e) => saveInputValue(e, setFilters, filters) }
            value={ filters.comparison }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>
        <label htmlFor="value-filter">
          <input
            name="value"
            type="number"
            data-testid="value-filter"
            id="value-filter"
            value={ filters.value }
            onChange={ (e) => saveInputValue(e, setFilters, filters) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          disabled={ columnsFilters.length === 0 }
          onClick={ () => saveUpdate(filters.column) }
        >
          Filtrar
        </button>
        <button
          name="remove-filters"
          type="button"
          data-testid="button-remove-filters"
          onClick={ removeAllFilters }
        >
          Remover Filtros
        </button>
        <label htmlFor="order-columns">
          Ordenar
          <select
            id="order-columns"
            name="column"
            data-testid="column-sort"
            onChange={ (e) => saveInputValue(e, setOrderSelect, orderSelect) }
          >
            {INITIAL_COLUMNS.map((column) => (
              <option key={ column }>{column}</option>
            ))}
          </select>
        </label>
        <label htmlFor="asc-radio">
          <input
            id="asc-radio"
            name="sort"
            type="radio"
            data-testid="column-sort-input-asc"
            value="ASC"
            onChange={ (e) => saveInputValue(e, setOrderSelect, orderSelect) }
          />
          Ascendente
        </label>
        <label htmlFor="desc-radio">
          <input
            id="desc-radio"
            name="sort"
            type="radio"
            data-testid="column-sort-input-desc"
            value="DESC"
            onChange={ (e) => saveInputValue(e, setOrderSelect, orderSelect) }
          />
          Descendente
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => setOrder(orderSelect) }
        >
          Ordenar
        </button>
      </div>
      {filterByNumericValues.length > 0 && (
        <div>
          {filterByNumericValues.map(({ column, comparison, value }) => (
            <div key={ column } data-testid="filter">
              <p>{`${column} ${comparison} ${value}`}</p>
              <button type="button" onClick={ () => removeFilter(column) }>
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Filters;
