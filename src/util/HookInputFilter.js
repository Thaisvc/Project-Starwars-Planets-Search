import React, { useContext } from 'react';
import StarwarsContext from '../Context/StarwarsContext';

function InputFilter() {
  const { handleChangeFilter } = useContext(StarwarsContext);
  return (
    <div>
      <label htmlFor="input1">
        <input
          name="text"
          data-testid="name-filter"
          onChange={ (e) => handleChangeFilter(e.target.value) }
        />
      </label>
    </div>
  );
}

export default InputFilter;
