import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import DashboardTabs from "../components/dashboard/DashboardTabs";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children }) => <div>{children}</div>,
  },
}));

vi.mock("../components/common/Logo", () => ({
  default: ({ collapsed }) => (
    <div>{collapsed ? "Logo Small" : "ArenaPilot Logo"}</div>
  ),
}));

describe("DashboardTabs", () => {
  const props = {
    activeTab: "overview",
    setActiveTab: vi.fn(),
    collapsed: false,
    setCollapsed: vi.fn(),
  };

  it("renders sidebar", () => {
    render(<DashboardTabs {...props} />);

    expect(
      screen.getByText("ArenaPilot Logo")
    ).toBeInTheDocument();
  });

  it("renders all navigation labels", () => {
    render(<DashboardTabs {...props} />);

    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText("Crowd Intelligence")).toBeInTheDocument();
    expect(screen.getByText("AI Briefing")).toBeInTheDocument();
    expect(screen.getByText("Navigator")).toBeInTheDocument();
    expect(screen.getByText("Operations")).toBeInTheDocument();
    expect(screen.getByText("History")).toBeInTheDocument();
    expect(screen.getByText("AI Assistant")).toBeInTheDocument();
    expect(screen.getByText("Alerts")).toBeInTheDocument();
  });

  it("changes active tab", () => {
    render(<DashboardTabs {...props} />);

    fireEvent.click(screen.getByText("Crowd Intelligence"));

    expect(props.setActiveTab).toHaveBeenCalledWith("crowd");
  });

  it("collapses sidebar", () => {
    render(<DashboardTabs {...props} />);

    fireEvent.click(screen.getAllByRole("button")[0]);

    expect(props.setCollapsed).toHaveBeenCalled();
  });

  it("shows compact logo when collapsed", () => {
    render(
      <DashboardTabs
        {...props}
        collapsed={true}
      />
    );

    expect(
      screen.getByText("Logo Small")
    ).toBeInTheDocument();
  });

  it("shows AI status card", () => {
    render(<DashboardTabs {...props} />);

    expect(
      screen.getByText("ArenaPilot Online")
    ).toBeInTheDocument();

    expect(
      screen.getByText("All systems operational")
    ).toBeInTheDocument();
  });

  it("hides AI status card when collapsed", () => {
    render(
      <DashboardTabs
        {...props}
        collapsed={true}
      />
    );

    expect(
      screen.queryByText("ArenaPilot Online")
    ).not.toBeInTheDocument();
  });
});