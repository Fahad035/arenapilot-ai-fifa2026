import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import AlertHistoryTable from "../components/alerts/AlertHistoryTable";

const mockHistory = [
  {
    id: 1,
    time: "07:15 PM",
    title: "Medical Emergency",
    severity: "Critical",
    location: "Gate A",
    status: "Resolved",
  },
  {
    id: 2,
    time: "06:58 PM",
    title: "Crowd Congestion",
    severity: "High",
    location: "North Entrance",
    status: "Resolved",
  },
  {
    id: 3,
    time: "06:42 PM",
    title: "Weather Advisory",
    severity: "Medium",
    location: "Venue",
    status: "Closed",
  },
];

describe("AlertHistoryTable", () => {

  it("renders successfully", () => {
    render(<AlertHistoryTable history={mockHistory} />);

    expect(
      screen.getByText(/Alert History/i)
    ).toBeInTheDocument();
  });

  it("renders all history rows", () => {
    render(<AlertHistoryTable history={mockHistory} />);

    expect(
      screen.getByText("Medical Emergency")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Crowd Congestion")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Weather Advisory")
    ).toBeInTheDocument();
  });

  it("shows timestamps", () => {
    render(<AlertHistoryTable history={mockHistory} />);

    expect(screen.getByText("07:15 PM")).toBeInTheDocument();
    expect(screen.getByText("06:58 PM")).toBeInTheDocument();
  });

  it("shows severity labels", () => {
    render(<AlertHistoryTable history={mockHistory} />);

    expect(screen.getByText("Critical")).toBeInTheDocument();
    expect(screen.getByText("High")).toBeInTheDocument();
    expect(screen.getByText("Medium")).toBeInTheDocument();
  });

  it("shows locations", () => {
    render(<AlertHistoryTable history={mockHistory} />);

    expect(screen.getByText("Gate A")).toBeInTheDocument();
    expect(screen.getByText("North Entrance")).toBeInTheDocument();
  });

  it("shows status", () => {
    render(<AlertHistoryTable history={mockHistory} />);

    expect(screen.getAllByText("Resolved")).toHaveLength(2);
    expect(screen.getByText("Closed")).toBeInTheDocument();
  });

  it("renders empty state", () => {
    render(<AlertHistoryTable history={[]} />);

    expect(
      screen.getByText(/No Alert History/i)
    ).toBeInTheDocument();
  });

  it("renders table headers", () => {
    render(<AlertHistoryTable history={mockHistory} />);

    expect(screen.getByText(/Time/i)).toBeInTheDocument();
    expect(screen.getByText(/Alert/i)).toBeInTheDocument();
    expect(screen.getByText(/Severity/i)).toBeInTheDocument();
    expect(screen.getByText(/Location/i)).toBeInTheDocument();
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
  });

  it("renders three rows", () => {
    render(<AlertHistoryTable history={mockHistory} />);

    expect(
      screen.getAllByRole("row").length
    ).toBeGreaterThanOrEqual(4);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <AlertHistoryTable history={mockHistory} />
    );

    expect(container).toMatchSnapshot();
  });

});