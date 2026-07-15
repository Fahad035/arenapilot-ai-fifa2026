import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import LiveAlertsList from "../components/alerts/LiveAlertsList";

describe("LiveAlertsList", () => {
  const analysis = {
    alerts: [
      {
        id: 1,
        title: "Medical Emergency",
        location: "Gate A",
        severity: "Critical",
        time: "07:15 PM",
      },
      {
        id: 2,
        title: "Gate Congestion",
        location: "North Entrance",
        severity: "High",
        time: "07:12 PM",
      },
      {
        id: 3,
        title: "Weather Advisory",
        location: "Entire Venue",
        severity: "Medium",
        time: "07:05 PM",
      },
    ],
  };

  it("renders successfully", () => {
    render(<LiveAlertsList analysis={analysis} />);

    expect(
      screen.getByText(/Live Alerts/i)
    ).toBeInTheDocument();
  });

  it("renders all alerts", () => {
    render(<LiveAlertsList analysis={analysis} />);

    expect(
      screen.getByText("Medical Emergency")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Gate Congestion")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Weather Advisory")
    ).toBeInTheDocument();
  });

  it("shows locations", () => {
    render(<LiveAlertsList analysis={analysis} />);

    expect(
      screen.getByText("Gate A")
    ).toBeInTheDocument();

    expect(
      screen.getByText("North Entrance")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Entire Venue")
    ).toBeInTheDocument();
  });

  it("shows timestamps", () => {
    render(<LiveAlertsList analysis={analysis} />);

    expect(
      screen.getByText("07:15 PM")
    ).toBeInTheDocument();

    expect(
      screen.getByText("07:12 PM")
    ).toBeInTheDocument();

    expect(
      screen.getByText("07:05 PM")
    ).toBeInTheDocument();
  });

  it("shows severity badges", () => {
    render(<LiveAlertsList analysis={analysis} />);

    expect(
      screen.getByText("Critical")
    ).toBeInTheDocument();

    expect(
      screen.getByText("High")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Medium")
    ).toBeInTheDocument();
  });

  it("shows active alert count", () => {
    render(<LiveAlertsList analysis={analysis} />);

    expect(
      screen.getByText("3 Active")
    ).toBeInTheDocument();
  });

  it("renders empty state", () => {
    render(
      <LiveAlertsList
        analysis={{ alerts: [] }}
      />
    );

    expect(
      screen.getByText(/Live Alerts/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/No Active Alerts/i)
    ).toBeInTheDocument();
  });

  it("renders three alert cards", () => {
    const { container } = render(
      <LiveAlertsList analysis={analysis} />
    );

    const cards =
      container.querySelectorAll(".rounded-2xl");

    expect(cards.length).toBeGreaterThanOrEqual(3);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <LiveAlertsList analysis={analysis} />
    );

    expect(container).toMatchSnapshot();
  });
});