import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Products from "./Products";

test("render Products is Loading", () => {
  render(<Products />);
  const linkElement = screen.getByText(/Loading Products/i);
  expect(linkElement).toBeInTheDocument();
});

test("render Products show on screen", async () => {
  const products: any = [
    {
      id: "1",
      marca: "nike",
      nombre: "polera grande",
      descripcion: "polera blanca grande",
      imagen: "asset/imagen.jpg",
      precio: 1000,
      descuento: 0,
    },
  ];

  const mockSuccessResponse = products;
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  var globalRef: any = global;
  globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  render(<Products />);
  await waitFor(() => screen.getByText(/polera grande/i));
  expect(screen.getByText(/polera grande/i)).toBeInTheDocument();
});
