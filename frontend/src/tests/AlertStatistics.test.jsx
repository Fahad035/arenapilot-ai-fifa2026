import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import AlertStatistics from "../components/alerts/AlertStatistics";

const analysis = {
  alerts: [{}, {}, {}, {}],
  confidence: "96%",
};

describe("AlertStatistics", () => {
  it("renders title", () => {
    render(<AlertStatistics analysis={analysis} />);

    expect(
      screen.getByText("Alert Statistics")
    ).toBeInTheDocument();
  });

  it("renders Today's Alerts", () => {
    render(<AlertStatistics analysis={analysis} />);

    expect(
      screen.getByText("Today's Alerts")
    ).toBeInTheDocument();

    expect(
      screen.getByText("4")
    ).toBeInTheDocument();
  });

  it("renders Average Response", () => {
    render(<AlertStatistics analysis={analysis} />);

    expect(
      screen.getByText("Average Response")
    ).toBeInTheDocument();

    expect(
      screen.getByText("01:42")
    ).toBeInTheDocument();
  });

  it("renders AI Confidence", () => {
    render(<AlertStatistics analysis={analysis} />);

    expect(
      screen.getByText("AI Confidence")
    ).toBeInTheDocument();

    expect(
      screen.getByText("96%")
    ).toBeInTheDocument();
  });

  it("renders Monitoring", () => {
    render(<AlertStatistics analysis={analysis} />);

    expect(
      screen.getByText("Monitoring")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Live")
    ).toBeInTheDocument();
  });

  it("renders AI Health Score", () => {
    render(<AlertStatistics analysis={analysis} />);

    expect(
      screen.getByText("AI Health Score")
    ).toBeInTheDocument();

    expect(
      screen.getByText("98%")
    ).toBeInTheDocument();
  });

  it("renders monitoring status", () => {
    render(<AlertStatistics analysis={analysis} />);

    expect(
      screen.getByText("ArenaPilot AI Monitoring")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "All monitoring services are operational."
      )
    ).toBeInTheDocument();
  });

  it("renders Last Scan", () => {
    render(<AlertStatistics analysis={analysis} />);

    expect(
      screen.getByText("Last Scan")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Just Now")
    ).toBeInTheDocument();
  });

  it("renders four statistic cards", () => {
    render(<AlertStatistics analysis={analysis} />);

    expect(
      screen.getByText("Today's Alerts")
    ).toBeVisible();

    expect(
      screen.getByText("Average Response")
    ).toBeVisible();

    expect(
      screen.getByText("AI Confidence")
    ).toBeVisible();

    expect(
      screen.getByText("Monitoring")
    ).toBeVisible();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <AlertStatistics analysis={analysis} />
    );

    expect(container).toMatchSnapshot();
  });
});