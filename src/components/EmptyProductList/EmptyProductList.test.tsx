import React from "react";
import { render, screen } from "@testing-library/react";
import EmptyProductList from "./EmptyProductList";

test("check if empty renders", (): void => {
  render(<EmptyProductList />);
  const text = screen.getByText(/No Products/i);
  expect(text).toBeInTheDocument();
});
