import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";

import DashboardHeader from "../components/dashboard/DashboardHeader";

describe("DashboardHeader", () => {

  beforeEach(() => {
    vi.useFakeTimers();

    vi.setSystemTime(
      new Date("2026-07-15T19:30:00")
    );
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  const overviewConfig = {
    title: "Overview",

    subtitle: "Full-venue situational awareness",

    cards: [
      {
        title: "AI Status",
        value: "Online",
      },
      {
        title: "Crowd Status",
        value: "Moderate",
      },
      {
        title: "Active Alerts",
        value: "03",
      },
      {
        title: "Local Time",
        value: "07:30 PM",
      },
    ],
  };

  it("renders page title", () => {
    render(
      <DashboardHeader
        config={overviewConfig}
      />
    );

    expect(
      screen.getByText("Overview")
    ).toBeInTheDocument();
  });

  it("renders page subtitle", () => {
    render(
      <DashboardHeader
        config={overviewConfig}
      />
    );

    expect(
      screen.getByText(
        "Full-venue situational awareness"
      )
    ).toBeInTheDocument();
  });

  it("renders AI Status card", () => {
    render(
      <DashboardHeader
        config={overviewConfig}
      />
    );

    expect(
      screen.getByText("AI Status")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Online")
    ).toBeInTheDocument();
  });

  it("renders Crowd Status card", () => {
    render(
      <DashboardHeader
        config={overviewConfig}
      />
    );

    expect(
      screen.getByText("Crowd Status")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Moderate")
    ).toBeInTheDocument();
  });

  it("renders Active Alerts card", () => {
    render(
      <DashboardHeader
        config={overviewConfig}
      />
    );

    expect(
      screen.getByText("Active Alerts")
    ).toBeInTheDocument();

    expect(
      screen.getByText("03")
    ).toBeInTheDocument();
  });

  it("renders Local Time card", () => {
    render(
      <DashboardHeader
        config={overviewConfig}
      />
    );

    expect(
      screen.getByText("Local Time")
    ).toBeInTheDocument();
  });

  it("renders four KPI cards", () => {
    render(
      <DashboardHeader
        config={overviewConfig}
      />
    );

    expect(
      screen.getAllByRole("heading").length
    ).toBeGreaterThanOrEqual(5);
  });

  it("renders subtitle correctly", () => {
    render(
      <DashboardHeader
        config={overviewConfig}
      />
    );

    expect(
      screen.getByText(
        /Full-venue situational awareness/i
      )
    ).toBeVisible();
  });

  it("renders header container", () => {
    const { container } = render(
      <DashboardHeader
        config={overviewConfig}
      />
    );

    expect(
      container.querySelector("header")
    ).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <DashboardHeader
        config={overviewConfig}
      />
    );

    expect(container).toMatchSnapshot();
  });

});