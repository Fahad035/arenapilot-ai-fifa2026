import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import OverviewTab from "../src/components/overview/OverviewTab";

// Mock child components
vi.mock("../src/components/overview/ScenarioForm", () => ({
  default: () => <div>Scenario Form</div>,
}));

vi.mock("../src/components/overview/ExecutiveSummary", () => ({
  default: () => <div>Executive Summary</div>,
}));

vi.mock("../src/components/overview/RiskGauge", () => ({
  default: () => <div>Risk Gauge</div>,
}));

vi.mock("../src/components/overview/QuickStats", () => ({
  default: () => <div>Quick Stats</div>,
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

  it("renders OverviewTab", () => {
    render(<OverviewTab {...props} />);

    expect(screen.getByText("Scenario Form")).toBeInTheDocument();
  });

  it("renders Executive Summary", () => {
    render(<OverviewTab {...props} />);

    expect(screen.getByText("Executive Summary")).toBeInTheDocument();
  });

  it("renders Risk Gauge", () => {
    render(<OverviewTab {...props} />);

    expect(screen.getByText("Risk Gauge")).toBeInTheDocument();
  });

  it("renders Quick Stats", () => {
    render(<OverviewTab {...props} />);

    expect(screen.getByText("Quick Stats")).toBeInTheDocument();
  });

  it("renders all child widgets", () => {
    render(<OverviewTab {...props} />);

    expect(screen.getByText("Scenario Form")).toBeVisible();
    expect(screen.getByText("Executive Summary")).toBeVisible();
    expect(screen.getByText("Risk Gauge")).toBeVisible();
    expect(screen.getByText("Quick Stats")).toBeVisible();
  });

  it("matches snapshot", () => {
    const { container } = render(<OverviewTab {...props} />);

    expect(container).toMatchSnapshot();
  });
});