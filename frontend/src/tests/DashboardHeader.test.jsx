import {
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  vi,
} from "vitest";

import {
  render,
  screen,
} from "@testing-library/react";

import DashboardHeader from "../components/dashboard/DashboardHeader";

describe("DashboardHeader", () => {
  beforeEach(() => {
    vi.useFakeTimers();

    vi.setSystemTime(
      new Date("2026-07-15T19:30:00")
    );
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  const analysis = {
    confidence: 98,

    risk: "Medium",

    route: "Gate B",

    metrics: {
      attendance: "58,000",
      crowdDensity: "81%",
      capacity: "74%",
      medicalRisk: "Low",
      securityScore: "High",
    },

    analysis: {
      risk: {
        level: "High",
      },

      accessibility: {
        status: "Available",
      },

      traffic: {
        status: "Moderate",
      },

      weather: "Cloudy",
    },

    routeAnalysis: {
      estimatedTime: "12 mins",
    },
  };

  it("renders header", () => {
    const { container } = render(
      <DashboardHeader
        activeTab="overview"
        analysis={analysis}
      />
    );

    expect(
      container.querySelector("header")
    ).toBeInTheDocument();
  });

  it("renders page title", () => {
    render(
      <DashboardHeader
        activeTab="overview"
        analysis={analysis}
      />
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Overview");
  });

  it("renders stadium badge", () => {
    render(
      <DashboardHeader
        activeTab="overview"
        analysis={analysis}
      />
    );

    expect(
      screen.getByText(/Lusail Stadium/i)
    ).toBeInTheDocument();
  });

  it("renders live operations badge", () => {
    render(
      <DashboardHeader
        activeTab="overview"
        analysis={analysis}
      />
    );

    expect(
      screen.getByText(/Live Operations/i)
    ).toBeInTheDocument();
  });

  it("renders overview cards", () => {
    render(
      <DashboardHeader
        activeTab="overview"
        analysis={analysis}
      />
    );

    expect(
      screen.getByText("AI Status")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Crowd Status")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Active Alerts")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Local Time")
    ).toBeInTheDocument();
  });

  it("renders crowd metrics", () => {
    render(
      <DashboardHeader
        activeTab="crowd"
        analysis={analysis}
      />
    );

    expect(
      screen.getByText("Attendance")
    ).toBeInTheDocument();

    expect(
      screen.getByText("58,000")
    ).toBeInTheDocument();

    expect(
      screen.getByText("81%")
    ).toBeInTheDocument();

    expect(
      screen.getByText("74%")
    ).toBeInTheDocument();

    expect(
      screen.getByText("High")
    ).toBeInTheDocument();
  });

  it("renders briefing metrics", () => {
    render(
      <DashboardHeader
        activeTab="briefing"
        analysis={analysis}
      />
    );

    expect(
      screen.getByText("AI Confidence")
    ).toBeInTheDocument();

    expect(
      screen.getByText("98")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Risk Level")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Medium")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Recommendation")
    ).toBeInTheDocument();

    expect(
      screen.getAllByText("Gate B").length
    ).toBeGreaterThan(0);

    expect(
      screen.getByText("Generated")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Just Now")
    ).toBeInTheDocument();
  });

  it("renders navigator metrics", () => {
    render(
      <DashboardHeader
        activeTab="navigator"
        analysis={analysis}
      />
    );

    expect(
      screen.getByText("Recommended Gate")
    ).toBeInTheDocument();

    expect(
      screen.getAllByText("Gate B").length
    ).toBeGreaterThan(0);

    expect(
      screen.getByText("Route Time")
    ).toBeInTheDocument();

    expect(
      screen.getByText("12 mins")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Accessibility")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Available")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Traffic")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Moderate")
    ).toBeInTheDocument();
  });

  it("renders operations metrics", () => {
    render(
      <DashboardHeader
        activeTab="operations"
        analysis={analysis}
      />
    );

    expect(
      screen.getByText("Medical")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Low")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Security")
    ).toBeInTheDocument();

    expect(
      screen.getByText("High")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Weather")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Cloudy")
    ).toBeInTheDocument();
  });

  it("renders history tab", () => {
    render(
      <DashboardHeader
        activeTab="history"
        analysis={analysis}
      />
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("History");

    expect(
      screen.getByText("Total Scenarios")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Average Risk")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Saved Reports")
    ).toBeInTheDocument();
  });

  it("renders assistant tab", () => {
    render(
      <DashboardHeader
        activeTab="assistant"
        analysis={analysis}
      />
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("AI Assistant");

    expect(
      screen.getByText("AI Model")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Response Time")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Status")
    ).toBeInTheDocument();
  });

  it("renders alert tab", () => {
    render(
      <DashboardHeader
        activeTab="alert"
        analysis={analysis}
      />
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Alerts");

    expect(
      screen.getByText("Critical Alerts")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Alert Level")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Response Team")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Last Update")
    ).toBeInTheDocument();
  });

  it("falls back to overview when tab is invalid", () => {
    render(
      <DashboardHeader
        activeTab="unknown-tab"
        analysis={analysis}
      />
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Overview");
  });

  it("updates live clock", () => {
    render(
      <DashboardHeader
        activeTab="overview"
        analysis={analysis}
      />
    );

    vi.advanceTimersByTime(1000);

    expect(
      screen.getByText(/\d{1,2}:\d{2}/)
    ).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <DashboardHeader
        activeTab="overview"
        analysis={analysis}
      />
    );

    expect(container).toMatchSnapshot();
  });
});