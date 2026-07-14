import { describe, it, expect, vi } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import renderWithRouter from "./renderWithRouter";

import Dashboard from "../pages/Dashboard";

// Mock all tab components
vi.mock("../src/components/overview/OverviewTab", () => ({
  default: () => <div>Overview Content</div>,
}));

vi.mock("../src/components/crowd/CrowdTab", () => ({
  default: () => <div>Crowd Intelligence Content</div>,
}));

vi.mock("../src/components/briefing/BriefingTab", () => ({
  default: () => <div>AI Briefing Content</div>,
}));

vi.mock("../src/components/navigator/NavigatorTab", () => ({
  default: () => <div>Navigator Content</div>,
}));

vi.mock("../src/components/operations/OperationsTab", () => ({
  default: () => <div>Operations Content</div>,
}));

vi.mock("../src/components/history/HistoryTab", () => ({
  default: () => <div>History Content</div>,
}));

vi.mock("../src/components/assistant/AIAssistantTab", () => ({
  default: () => <div>AI Assistant Content</div>,
}));

vi.mock("../src/components/alerts/AlertsTab", () => ({
  default: () => <div>Alerts Content</div>,
}));

describe("Dashboard", () => {
  it("renders dashboard successfully", () => {
    renderWithRouter(<Dashboard />);

    expect(
      screen.getByText("Overview Content")
    ).toBeInTheDocument();
  });

  it("opens Overview tab by default", () => {
    renderWithRouter(<Dashboard />);

    expect(
      screen.getByText("Overview Content")
    ).toBeInTheDocument();
  });

  it("switches to Crowd Intelligence tab", () => {
    renderWithRouter(<Dashboard />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /Crowd Intelligence/i,
      })
    );

    expect(
      screen.getByText("Crowd Intelligence Content")
    ).toBeInTheDocument();
  });

  it("switches to AI Briefing tab", () => {
    renderWithRouter(<Dashboard />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /AI Briefing/i,
      })
    );

    expect(
      screen.getByText("AI Briefing Content")
    ).toBeInTheDocument();
  });

  it("switches to Navigator tab", () => {
    renderWithRouter(<Dashboard />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /Navigator/i,
      })
    );

    expect(
      screen.getByText("Navigator Content")
    ).toBeInTheDocument();
  });

  it("switches to Operations tab", () => {
    renderWithRouter(<Dashboard />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /Operations/i,
      })
    );

    expect(
      screen.getByText("Operations Content")
    ).toBeInTheDocument();
  });

  it("switches to History tab", () => {
    renderWithRouter(<Dashboard />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /History/i,
      })
    );

    expect(
      screen.getByText("History Content")
    ).toBeInTheDocument();
  });

  it("switches to AI Assistant tab", () => {
    renderWithRouter(<Dashboard />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /AI Assistant/i,
      })
    );

    expect(
      screen.getByText("AI Assistant Content")
    ).toBeInTheDocument();
  });

  it("switches to Alerts tab", () => {
    renderWithRouter(<Dashboard />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /Alerts/i,
      })
    );

    expect(
      screen.getByText("Alerts Content")
    ).toBeInTheDocument();
  });
});