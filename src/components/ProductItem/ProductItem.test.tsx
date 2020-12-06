import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductItem from './ProductItem';

test('render ProductItem', () => {
    const props = {
        id: '1',
        marca: 'nike',
        imagen: 'asset/imagen.jpg',
        nombre: 't-shirt',
        descripcion: 'polera grande',
        precio: 1000,
        descuento: 0,
    };

  render(<ProductItem {...props} />);
  const linkElement = screen.getByText(/nike/i);
  expect(linkElement).toBeInTheDocument();
});


test('render ProductItem with discount', () => {
    const props = {
        id: '1',
        marca: 'nike',
        imagen: 'asset/imagen.jpg',
        nombre: 't-shirt',
        descripcion: 'polera grande',
        precio: 1000,
        descuento: 100,
    };

  render(<ProductItem {...props} />);
  const linkElement = screen.getByText(/900/i);
  expect(linkElement).toBeInTheDocument();
});
