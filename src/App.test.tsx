import React from 'react';
import { render, screen } from '@testing-library/react';
import Products from './pages/Products/Products';

test('renders learn react search box', () => {
  render(<Products />);
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});
