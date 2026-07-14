import { describe, it, expect, vi } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import renderWithRouter from "./renderWithRouter";

import DashboardTabs from "../src/components/dashboard/DashboardTabs";

// Mock Logo component
vi.mock("../src/components/common/Logo", () => ({
  default: ({ collapsed }) => (
    <div>{collapsed ? "Logo Small" : "ArenaPilot Logo"}</div>
  ),
}));

describe("DashboardTabs", () => {
  const defaultProps = {
    activeTab: "overview",
    setActiveTab: vi.fn(),
    collapsed: false,
    setCollapsed: vi.fn(),
  };

  it("renders sidebar", () => {
    renderWithRouter(<DashboardTabs {...defaultProps} />);

    expect(
      screen.getByText("ArenaPilot Logo")
    ).toBeInTheDocument();
  });

  it("renders all navigation tabs", () => {
    renderWithRouter(<DashboardTabs {...defaultProps} />);

    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText("Crowd Intelligence")).toBeInTheDocument();
    expect(screen.getByText("AI Briefing")).toBeInTheDocument();
    expect(screen.getByText("Navigator")).toBeInTheDocument();
    expect(screen.getByText("Operations")).toBeInTheDocument();
    expect(screen.getByText("History")).toBeInTheDocument();
    expect(screen.getByText("AI Assistant")).toBeInTheDocument();
    expect(screen.getByText("Alerts")).toBeInTheDocument();
  });

  it("calls setActiveTab when Overview is clicked", () => {
    renderWithRouter(<DashboardTabs {...defaultProps} />);

    fireEvent.click(screen.getByText("Overview"));

    expect(defaultProps.setActiveTab).toHaveBeenCalledWith("overview");
  });

  it("calls setActiveTab when Crowd Intelligence is clicked", () => {
    renderWithRouter(<DashboardTabs {...defaultProps} />);

    fireEvent.click(screen.getByText("Crowd Intelligence"));

    expect(defaultProps.setActiveTab).toHaveBeenCalledWith("crowd");
  });

  it("calls setCollapsed when collapse button is clicked", () => {
    renderWithRouter(<DashboardTabs {...defaultProps} />);

    const buttons = screen.getAllByRole("button");

    // First button = collapse toggle
    fireEvent.click(buttons[0]);

    expect(defaultProps.setCollapsed).toHaveBeenCalled();
  });

  it("renders compact logo when collapsed", () => {
    renderWithRouter(
      <DashboardTabs
        {...defaultProps}
        collapsed={true}
      />
    );

    expect(
      screen.getByText("Logo Small")
    ).toBeInTheDocument();
  });

  it("shows AI Status box when expanded", () => {
    renderWithRouter(<DashboardTabs {...defaultProps} />);

    expect(
      screen.getByText("ArenaPilot Online")
    ).toBeInTheDocument();

    expect(
      screen.getByText("All systems operational")
    ).toBeInTheDocument();
  });

  it("hides AI Status box when collapsed", () => {
    renderWithRouter(
      <DashboardTabs
        {...defaultProps}
        collapsed={true}
      />
    );

    expect(
      screen.queryByText("ArenaPilot Online")
    ).not.toBeInTheDocument();
  });

  it("keeps Overview tab visible", () => {
    renderWithRouter(<DashboardTabs {...defaultProps} />);

    expect(
      screen.getByText("Overview")
    ).toBeVisible();
  });

  it("renders exactly eight navigation tabs", () => {
    renderWithRouter(<DashboardTabs {...defaultProps} />);

    const navButtons = screen.getAllByRole("button");

    // 1 collapse button + 8 navigation buttons
    expect(navButtons.length).toBe(9);
  });
});