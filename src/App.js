import React from 'react';
import './App.css';
// import starwarsContext from './Context/starwarsContext';
import Table from './Component/Table';
import InputFilter from './util/HookInputFilter';

function App() {
  return (
    <div>
      <InputFilter />
      <Table />
    </div>

  );
}

export default App;
