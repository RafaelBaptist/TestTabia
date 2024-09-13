import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("should render correctly", () => {
  render(<App />);

  const pageTitle = screen.getByText(/ãcme/i);

  expect(pageTitle).toBeInTheDocument();
});
