import React from 'react';
import { render } from '@testing-library/react';
import StarwarsProvider from '../Context/StarwarsProvider';

const renderWithRouter = (component) => ({
  ...render(<StarwarsProvider>{component}</StarwarsProvider>),
});

export default renderWithRouter;
