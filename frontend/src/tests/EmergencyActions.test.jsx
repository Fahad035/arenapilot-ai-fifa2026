import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import EmergencyActions from "../components/alerts/EmergencyActions";

describe("EmergencyActions", () => {
  const analysis = {
    recommendations: [
      "Deploy Additional Stewards",
      "Open Gate C",
      "Dispatch Medical Team",
    ],
  };

  it("renders successfully", () => {
    render(<EmergencyActions analysis={analysis} />);

    expect(
      screen.getByText(/AI Recommended Actions/i)
    ).toBeInTheDocument();
  });

  it("renders AI Active badge", () => {
    render(<EmergencyActions analysis={analysis} />);

    expect(
      screen.getByText(/AI Active/i)
    ).toBeInTheDocument();
  });

  it("renders recommendation cards", () => {
    render(<EmergencyActions analysis={analysis} />);

    expect(
      screen.getByText("Deploy Additional Stewards")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Open Gate C")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Dispatch Medical Team")
    ).toBeInTheDocument();
  });

  it("renders Execute buttons", () => {
    render(<EmergencyActions analysis={analysis} />);

    expect(
      screen.getAllByRole("button", {
        name: /Execute/i,
      }).length
    ).toBe(3);
  });

  it("shows Ready to Execute text", () => {
    render(<EmergencyActions analysis={analysis} />);

    expect(
      screen.getAllByText(/Ready to Execute/i).length
    ).toBe(3);
  });

  it("renders priority badges", () => {
    render(<EmergencyActions analysis={analysis} />);

    expect(
      screen.getByText("High")
    ).toBeInTheDocument();

    expect(
      screen.getAllByText("Medium").length
    ).toBeGreaterThanOrEqual(2);
  });

  it("renders default actions when analysis is null", () => {
    render(<EmergencyActions analysis={null} />);

    expect(
      screen.getByText("Deploy Additional Stewards")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Increase CCTV Monitoring")
    ).toBeInTheDocument();
  });

  it("renders default Execute buttons", () => {
    render(<EmergencyActions analysis={null} />);

    expect(
      screen.getAllByRole("button", {
        name: /Execute/i,
      }).length
    ).toBe(5);
  });

  it("renders five default recommendation cards", () => {
    render(<EmergencyActions analysis={null} />);

    expect(
      screen.getAllByText(/Ready to Execute/i).length
    ).toBe(5);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <EmergencyActions analysis={analysis} />
    );

    expect(container).toMatchSnapshot();
  });
});