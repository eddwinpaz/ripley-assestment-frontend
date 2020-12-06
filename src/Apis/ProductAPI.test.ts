import { waitFor } from "@testing-library/react";
import ProductAPI from "./ProductAPI";

test("render ProductAPI / GetProducts", async () => {
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

  const response = await ProductAPI.getProducts();

  await waitFor(() => response);
  expect(products.length).toBe(1);
});

test("render ProductAPI / getProductById", async () => {
  const product: any = {
    id: "1",
    marca: "nike",
    nombre: "polera grande",
    descripcion: "polera blanca grande",
    imagen: "asset/imagen.jpg",
    precio: 1000,
    descuento: 0,
  };

  const mockSuccessResponse = {
    product,
    message: "obtained product successfully",
  };
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  var globalRef: any = global;
  globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  const response = await ProductAPI.getProductById('1');

  await waitFor(() => response);
  expect(response.product.marca).toBe(product.marca);
});


test("render ProductAPI / searchProducts", async () => {
    const products: any = [{
      id: "1",
      marca: "nike",
      nombre: "polera grande",
      descripcion: "polera blanca grande",
      imagen: "asset/imagen.jpg",
      precio: 1000,
      descuento: 0,
    }];
  
    const mockSuccessResponse = {
      products,
      message: "results",
    };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    var globalRef: any = global;
    globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  
    const response = await ProductAPI.searchProducts('nike');
  
    await waitFor(() => response);
    expect(response.products.length).toBe(1);
  });
