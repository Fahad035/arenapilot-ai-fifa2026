import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import AlertStatistics from "../components/alerts/AlertStatistics";

const mockStats = {
  totalAlerts: 18,
  critical: 2,
  high: 5,
  medium: 7,
  low: 4,
  resolved: 12,
  active: 6,
  averageResponseTime: "2.4 min",
  todayIncidents: 18,
  yesterdayIncidents: 14,
};

describe("AlertStatistics", () => {
  it("renders successfully", () => {
    render(<AlertStatistics stats={mockStats} />);

    expect(
      screen.getByText(/Alert Statistics/i)
    ).toBeInTheDocument();
  });

  it("shows total alerts", () => {
    render(<AlertStatistics stats={mockStats} />);

    expect(screen.getByText("18")).toBeInTheDocument();
  });

  it("shows critical alerts", () => {
    render(<AlertStatistics stats={mockStats} />);

    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("shows high alerts", () => {
    render(<AlertStatistics stats={mockStats} />);

    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("shows medium alerts", () => {
    render(<AlertStatistics stats={mockStats} />);

    expect(screen.getByText("7")).toBeInTheDocument();
  });

  it("shows low alerts", () => {
    render(<AlertStatistics stats={mockStats} />);

    expect(screen.getByText("4")).toBeInTheDocument();
  });

  it("shows resolved alerts", () => {
    render(<AlertStatistics stats={mockStats} />);

    expect(screen.getByText("12")).toBeInTheDocument();
  });

  it("shows active alerts", () => {
    render(<AlertStatistics stats={mockStats} />);

    expect(screen.getByText("6")).toBeInTheDocument();
  });

  it("shows response time", () => {
    render(<AlertStatistics stats={mockStats} />);

    expect(
      screen.getByText("2.4 min")
    ).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <AlertStatistics stats={mockStats} />
    );

    expect(container).toMatchSnapshot();
  });
});