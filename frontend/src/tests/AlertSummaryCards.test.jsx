    import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import AlertSummaryCards from "../components/alerts/AlertSummaryCards";

const mockAlerts = [
  {
    id: 1,
    severity: "Critical",
    title: "Medical Emergency",
  },
  {
    id: 2,
    severity: "High",
    title: "Gate Congestion",
  },
  {
    id: 3,
    severity: "Medium",
    title: "Weather Advisory",
  },
  {
    id: 4,
    severity: "Low",
    title: "Parking Update",
  },
];

describe("AlertSummaryCards", () => {

  it("renders successfully", () => {
    render(<AlertSummaryCards alerts={mockAlerts} />);

    expect(
      screen.getByText(/Critical Alerts/i)
    ).toBeInTheDocument();
  });

  it("shows total alerts", () => {
    render(<AlertSummaryCards alerts={mockAlerts} />);

    expect(
      screen.getByText("4")
    ).toBeInTheDocument();
  });

  it("shows Critical Alerts card", () => {
    render(<AlertSummaryCards alerts={mockAlerts} />);

    expect(
      screen.getByText(/Critical Alerts/i)
    ).toBeVisible();
  });

  it("shows High Priority card", () => {
    render(<AlertSummaryCards alerts={mockAlerts} />);

    expect(
      screen.getByText(/High Priority/i)
    ).toBeVisible();
  });

  it("shows Medium Priority card", () => {
    render(<AlertSummaryCards alerts={mockAlerts} />);

    expect(
      screen.getByText(/Medium Priority/i)
    ).toBeVisible();
  });

  it("shows Low Priority card", () => {
    render(<AlertSummaryCards alerts={mockAlerts} />);

    expect(
      screen.getByText(/Low Priority/i)
    ).toBeVisible();
  });

  it("renders four statistic cards", () => {
    const { container } = render(
      <AlertSummaryCards alerts={mockAlerts} />
    );

    const cards =
      container.querySelectorAll(".rounded-2xl");

    expect(cards.length).toBeGreaterThanOrEqual(4);
  });

  it("renders empty state", () => {
    render(<AlertSummaryCards alerts={[]} />);

    expect(
      screen.getByText("0")
    ).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <AlertSummaryCards alerts={mockAlerts} />
    );

    expect(container).toMatchSnapshot();
  });

});