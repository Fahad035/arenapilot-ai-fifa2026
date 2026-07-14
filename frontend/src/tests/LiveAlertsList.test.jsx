import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import LiveAlertsList from "../src/components/alerts/LiveAlertsList";

const mockAlerts = [
  {
    id: 1,
    title: "Medical Emergency",
    description: "Spectator collapsed near Gate A",
    severity: "Critical",
    location: "Gate A",
    time: "07:15 PM",
    status: "Active",
  },
  {
    id: 2,
    title: "Gate Congestion",
    description: "Heavy crowd at North Entrance",
    severity: "High",
    location: "North Entrance",
    time: "07:12 PM",
    status: "Monitoring",
  },
  {
    id: 3,
    title: "Weather Advisory",
    description: "Heavy rain expected",
    severity: "Medium",
    location: "Entire Venue",
    time: "07:05 PM",
    status: "Resolved",
  },
];

describe("LiveAlertsList", () => {

  it("renders successfully", () => {
    render(<LiveAlertsList alerts={mockAlerts} />);

    expect(
      screen.getByText(/Live Alerts/i)
    ).toBeInTheDocument();
  });

  it("renders all alerts", () => {
    render(<LiveAlertsList alerts={mockAlerts} />);

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

  it("shows alert descriptions", () => {
    render(<LiveAlertsList alerts={mockAlerts} />);

    expect(
      screen.getByText(/Spectator collapsed/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Heavy crowd/i)
    ).toBeInTheDocument();
  });

  it("shows severity badges", () => {
    render(<LiveAlertsList alerts={mockAlerts} />);

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

  it("shows alert locations", () => {
    render(<LiveAlertsList alerts={mockAlerts} />);

    expect(
      screen.getByText("Gate A")
    ).toBeInTheDocument();

    expect(
      screen.getByText("North Entrance")
    ).toBeInTheDocument();
  });

  it("shows timestamps", () => {
    render(<LiveAlertsList alerts={mockAlerts} />);

    expect(
      screen.getByText("07:15 PM")
    ).toBeInTheDocument();

    expect(
      screen.getByText("07:12 PM")
    ).toBeInTheDocument();
  });

  it("shows alert status", () => {
    render(<LiveAlertsList alerts={mockAlerts} />);

    expect(
      screen.getByText("Active")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Monitoring")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Resolved")
    ).toBeInTheDocument();
  });

  it("renders empty state when there are no alerts", () => {
    render(<LiveAlertsList alerts={[]} />);

    expect(
      screen.getByText(/No Active Alerts/i)
    ).toBeInTheDocument();
  });

  it("renders correct number of alert cards", () => {
    const { container } = render(
      <LiveAlertsList alerts={mockAlerts} />
    );

    const cards =
      container.querySelectorAll(".rounded-2xl");

    expect(cards.length).toBeGreaterThanOrEqual(3);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <LiveAlertsList alerts={mockAlerts} />
    );

    expect(container).toMatchSnapshot();
  });

});