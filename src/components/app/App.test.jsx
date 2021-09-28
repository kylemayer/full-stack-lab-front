import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

describe('App page', () => {
  it('renders the list of beer', async () => {
    render(<App />);
  });
});
