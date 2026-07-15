import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import renderWithRouter from "./renderWithRouter";

import Dashboard from "../pages/Dashboard";

vi.mock("../components/dashboard/DashboardHeader", () => ({
  default: () => <div>Dashboard Header</div>,
}));

vi.mock("../components/dashboard/DashboardTabs", () => ({
  default: () => <div>Dashboard Sidebar</div>,
}));

vi.mock("../components/alerts/AlertTicker", () => ({
  default: () => <div>Alert Ticker</div>,
}));

vi.mock("../components/overview/OverviewTab", () => ({
  default: () => <div>Overview Tab</div>,
}));

vi.mock("../components/crowd/CrowdTab", () => ({
  default: () => <div>Crowd Tab</div>,
}));

vi.mock("../components/briefing/BriefingTab", () => ({
  default: () => <div>Briefing Tab</div>,
}));

vi.mock("../components/navigator/NavigatorTab", () => ({
  default: () => <div>Navigator Tab</div>,
}));

vi.mock("../components/operations/OperationsTab", () => ({
  default: () => <div>Operations Tab</div>,
}));

vi.mock("../components/history/HistoryTab", () => ({
  default: () => <div>History Tab</div>,
}));

vi.mock("../components/assistant/AIAssistantTab", () => ({
  default: () => <div>Assistant Tab</div>,
}));

vi.mock("../components/alerts/SettingsTab", () => ({
  default: () => <div>Alert Settings Tab</div>,
}));

describe("Dashboard", () => {
  it("renders successfully", () => {
    renderWithRouter(<Dashboard />);

    expect(
      screen.getByText("Dashboard Header")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Dashboard Sidebar")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Alert Ticker")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Overview Tab")
    ).toBeInTheDocument();
  });
});