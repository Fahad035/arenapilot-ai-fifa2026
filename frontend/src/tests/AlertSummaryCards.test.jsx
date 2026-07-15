import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import AlertSummaryCards from "../components/alerts/AlertSummaryCards";

const analysis = {
  overallRisk: "High",

  activeIncidents: [
    {
      severity: "Critical",
    },
    {
      severity: "High",
    },
    {
      severity: "High",
    },
  ],

  resolvedAlerts: 5,

  monitoringSystems: 12,
};

describe("AlertSummaryCards", () => {
  it("renders successfully", () => {
    render(<AlertSummaryCards analysis={analysis} />);

    expect(
      screen.getByText("Critical Alerts")
    ).toBeInTheDocument();
  });

  it("shows critical alert count", () => {
    render(<AlertSummaryCards analysis={analysis} />);

    expect(
      screen.getByText("1")
    ).toBeInTheDocument();
  });

  it("shows high priority count", () => {
    render(<AlertSummaryCards analysis={analysis} />);

    expect(
      screen.getByText("2")
    ).toBeInTheDocument();
  });

  it("shows monitoring systems", () => {
    render(<AlertSummaryCards analysis={analysis} />);

    expect(
      screen.getByText("12")
    ).toBeInTheDocument();
  });

  it("shows resolved alerts", () => {
    render(<AlertSummaryCards analysis={analysis} />);

    expect(
      screen.getByText("5")
    ).toBeInTheDocument();
  });

  it("shows High Risk subtitle", () => {
    render(<AlertSummaryCards analysis={analysis} />);

    expect(
      screen.getByText("High Risk")
    ).toBeInTheDocument();
  });

  it("renders all four cards", () => {
    const { container } = render(
      <AlertSummaryCards analysis={analysis} />
    );

    const cards =
      container.querySelectorAll(".rounded-2xl");

    expect(cards.length).toBeGreaterThanOrEqual(4);
  });

  it("renders default values when analysis is missing", () => {
    render(<AlertSummaryCards analysis={null} />);

    expect(
      screen.getByText("Critical Alerts")
    ).toBeInTheDocument();

    expect(
      screen.getByText("High Priority")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Monitoring")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Resolved")
    ).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <AlertSummaryCards analysis={analysis} />
    );

    expect(container).toMatchSnapshot();
  });
});