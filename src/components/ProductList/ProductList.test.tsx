import React from "react";
import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";
import AppContext from "../../context/AppContext";

const mockProductList = [
  {
    id: "1",
    marca: "nike",
    nombre: "polera grande",
    descripcion: "polera blanca grande",
    imagen: "asset/imagen.jpg",
    precio: 1000,
    descuento: 0,
  },
  {
    id: "2",
    marca: "adidas",
    nombre: "polera pequeña",
    descripcion: "polera blanca pequeña",
    imagen: "asset/imagen.jpg",
    precio: 21000,
    descuento: 0,
  },
];

test("render ProductList", () => {
  const products: any = mockProductList;
  const searchQuery = () => {};
  const isLoading = false;

  render(
    <AppContext.Provider
      value={{ products: products, search: searchQuery, isLoading: isLoading }}
    >
      <ProductList />
    </AppContext.Provider>
  );
  const linkElement = screen.getByText(/Product Results/i);
  expect(linkElement).toBeInTheDocument();
});

test("render ProductList products", () => {
    const products: any = mockProductList;
    const searchQuery = () => {};
    const isLoading = false;
  
    render(
      <AppContext.Provider
        value={{ products: products, search: searchQuery, isLoading: isLoading }}
      >
        <ProductList />
      </AppContext.Provider>
    );
    const linkElement = screen.getByText(/adidas/i);
    expect(linkElement).toBeInTheDocument();
  });
