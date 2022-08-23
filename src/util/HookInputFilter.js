import React, { useContext } from 'react';
import StarwarsContext from '../Context/StarwarsContext';

function InputFilter() {
  const { handleChangeFilter } = useContext(StarwarsContext);
  return (
    <div>
      <label htmlFor="input1">
        <input
          type="text"
          onChange={ ({ target: { value } }) => handleChangeFilter(value) }
          name="inputText"
          data-testid="name-filter"
        />
      </label>
    </div>
  );
}

export default InputFilter;
