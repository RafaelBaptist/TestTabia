import React from "react";
import { render, screen } from "@testing-library/react";
import SideBar from "./SideBar";

const menuItems = [
  "Home",
  "Analisys",
  "Survey report",
  "Comparison",
  "Custom polls",
  "Feedback",
  "Goals",
];

test("should render correctly", () => {
  render(<SideBar show={true} />);

  menuItems.forEach((menuItem) => {
    expect(screen.getByText(menuItem)).toBeInTheDocument();
  });
});
