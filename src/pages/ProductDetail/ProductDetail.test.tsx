import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ProductDetail from "./ProductDetail";
import AppContext from "../../context/AppContext";

test("render ProductDetail is Loading", () => {
  const products: any = {};
  const searchQuery = jest.fn();
  const isLoading = true;

  render(
    <AppContext.Provider
      value={{ products: products, search: searchQuery, isLoading: isLoading }}
    >
      <ProductDetail match={{ params: { id: "1" } }} />
    </AppContext.Provider>
  );
  const linkElement = screen.getByText(/Loading Product/i);
  expect(linkElement).toBeInTheDocument();
});

test("render ProductDetail shows product", async () => {
  const product: any = {
    id: "1",
    marca: "nike",
    nombre: "polera grande",
    descripcion: "polera blanca grande",
    imagen: "asset/imagen.jpg",
    precio: 1000,
    descuento: 0,
  };

  const mockSuccessResponse = { message: "success", product };
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  var globalRef: any = global;
  globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  render(<ProductDetail match={{ params: { id: "1" } }} />);
  await waitFor(() => screen.getByText(/polera grande/i));
  expect(screen.getByText(/polera grande/i)).toBeInTheDocument();
});
