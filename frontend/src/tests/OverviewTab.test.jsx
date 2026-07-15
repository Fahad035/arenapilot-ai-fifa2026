import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import OverviewTab from "../components/overview/OverviewTab";

/* ---------- Mock child components ---------- */

vi.mock("../components/overview/StatsCards", () => ({
  default: () => <div>Stats Cards</div>,
}));

vi.mock("../components/overview/ScenarioForm", () => ({
  default: () => <div>Scenario Form</div>,
}));

vi.mock("../components/overview/QuickSummary", () => ({
  default: () => <div>Quick Summary</div>,
}));

vi.mock("../components/overview/LiveStatus", () => ({
  default: () => <div>Live Status</div>,
}));

vi.mock("../components/overview/OperationsFeed", () => ({
  default: () => <div>Operations Feed</div>,
}));

/* ---------- Mock polling hook ---------- */

vi.mock("../components/overview/useLivePolling", () => ({
  default: vi.fn(),
}));

describe("OverviewTab", () => {
  const props = {
    scenarioData: {},

    setScenarioData: vi.fn(),

    analysis: null,

    setAnalysis: vi.fn(),

    loading: false,

    setLoading: vi.fn(),
  };

  it("renders successfully", () => {
    render(<OverviewTab {...props} />);

    expect(
      screen.getByText("Stats Cards")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Scenario Form")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Quick Summary")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Live Status")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Operations Feed")
    ).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <OverviewTab {...props} />
    );

    expect(container).toMatchSnapshot();
  });
});