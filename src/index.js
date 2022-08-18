import React from 'react';
import { render } from 'react-dom';
import App from './App';
import StarwarsProvider from './Context/starwarsProvider';

render(
  <StarwarsProvider>
    <App />
  </StarwarsProvider>,
  document.getElementById('root'),
);
