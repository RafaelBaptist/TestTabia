import { render, screen, fireEvent } from "@testing-library/react";
import TopBar from "./TopBar";
import { MenuIcon } from "../../assets/menu-bars";

const title = "ãcme";
const handleSidebarMock = jest.fn();

describe("TopBar", () => {
  test("should render correctly", () => {
    render(<TopBar handleSidebar={handleSidebarMock} active={false} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test("should call handleSidebar when button is clicked", () => {
    render(<TopBar handleSidebar={handleSidebarMock} active={false} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleSidebarMock).toHaveBeenCalled();
  });
});
