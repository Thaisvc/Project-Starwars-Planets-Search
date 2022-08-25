import { node } from 'prop-types';
import React, { useState } from 'react';
import PlanetsContext from './StarwarsContext';

function StarwarsProvider({ children }) {
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [order, setOrder] = useState({});

  const context = {
    filterByName,
    filterByNumericValues,
    order,
    setFilterByName,
    setFilterByNumericValues,
    setOrder,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: node.isRequired,
};

export default StarwarsProvider;
