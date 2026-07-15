import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import AlertHistoryTable from "../components/alerts/AlertHistoryTable";

const analysis = {
  alertHistory: [
    {
      id: 1,
      time: "07:15 PM",
      category: "Medical Emergency",
      severity: "Critical",
      status: "Resolved",
      action: "Medical Team Dispatched",
    },
    {
      id: 2,
      time: "06:58 PM",
      category: "Crowd Congestion",
      severity: "High",
      status: "Monitoring",
      action: "Opened Gate C",
    },
    {
      id: 3,
      time: "06:42 PM",
      category: "Weather Advisory",
      severity: "Medium",
      status: "Investigating",
      action: "Public Announcement",
    },
  ],
};

describe("AlertHistoryTable", () => {
  it("renders title", () => {
    render(<AlertHistoryTable analysis={analysis} />);

    expect(
      screen.getByText("Alert History")
    ).toBeInTheDocument();
  });

  it("renders categories", () => {
    render(<AlertHistoryTable analysis={analysis} />);

    expect(
      screen.getAllByText("Medical Emergency").length
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText("Crowd Congestion").length
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText("Weather Advisory").length
    ).toBeGreaterThan(0);
  });

  it("renders severity badges", () => {
    render(<AlertHistoryTable analysis={analysis} />);

    expect(
      screen.getAllByText("Critical").length
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText("High").length
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText("Medium").length
    ).toBeGreaterThan(0);
  });

  it("renders statuses", () => {
    render(<AlertHistoryTable analysis={analysis} />);

    expect(
      screen.getAllByText("Resolved").length
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText("Monitoring").length
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText("Investigating").length
    ).toBeGreaterThan(0);
  });

  it("renders AI actions", () => {
    render(<AlertHistoryTable analysis={analysis} />);

    expect(
      screen.getAllByText("Medical Team Dispatched").length
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText("Opened Gate C").length
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText("Public Announcement").length
    ).toBeGreaterThan(0);
  });

  it("renders timestamps", () => {
    render(<AlertHistoryTable analysis={analysis} />);

    expect(
      screen.getAllByText("07:15 PM").length
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText("06:58 PM").length
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText("06:42 PM").length
    ).toBeGreaterThan(0);
  });

  it("renders table headers", () => {
    render(<AlertHistoryTable analysis={analysis} />);

    expect(screen.getByText("Time")).toBeInTheDocument();
    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Severity")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("AI Action")).toBeInTheDocument();
  });

  it("renders record count", () => {
    render(<AlertHistoryTable analysis={analysis} />);

    expect(
      screen.getByText("3 Records")
    ).toBeInTheDocument();
  });

  it("renders footer", () => {
    render(<AlertHistoryTable analysis={analysis} />);

    expect(
      screen.getByText("ArenaPilot AI Incident Log")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Every alert is automatically stored/i
      )
    ).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <AlertHistoryTable analysis={analysis} />
    );

    expect(container).toMatchSnapshot();
  });
});