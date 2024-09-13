import React from "react";
import { render, screen } from "@testing-library/react";
import SideBarItems from "./SideBarItems";

test("should render correctly", () => {
  render(<SideBarItems title="test" />);

  const pageTitle = screen.getByText(/test/i);

  expect(pageTitle).toBeInTheDocument();
});

test("should render with icon", () => {
  render(<SideBarItems title="test" icon="test.png" />);

  const image = screen.getByRole("img");

  expect(image).toBeInTheDocument();
});

test("should render submenus", () => {
  const subMenu = [{ title: "child1" }, { title: "child2" }];

  render(<SideBarItems title="test" subMenu={subMenu} />);

  subMenu.forEach((subMenuItem) => {
    expect(screen.getByText(subMenuItem.title)).toBeInTheDocument();
  });
});
