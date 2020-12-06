import React from "react";
import { fireEvent, render, screen, wait } from "@testing-library/react";
import SearchInput from "./SearchInput";
import AppContext from "../../context/AppContext";

test("render SearchInput", () => {
  const products: any = [];
  const searchQuery = jest.fn();
  const isLoading = false;

  render(
    <AppContext.Provider
      value={{ products: products, search: searchQuery, isLoading: isLoading }}
    >
      <SearchInput />
    </AppContext.Provider>
  );
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});

test("render SearchInput type search query is clean after submit", async () => {
  const products: any = [];
  const searchQuery = jest.fn();
  const isLoading = false;

  render(
    <AppContext.Provider
      value={{ products: products, search: searchQuery, isLoading: isLoading }}
    >
      <SearchInput />
    </AppContext.Provider>
  );

  const input = screen.getByPlaceholderText(
    "Search product by nombre, id, marca, descripcion"
  );

  fireEvent.click(input);
  fireEvent.change(input, { target: { value: "adidas" } });

  const button = screen.getByText("Search");
  fireEvent.click(button);

  await wait(() => {
      expect(input.getAttribute("value")).toEqual('');
  })

});
