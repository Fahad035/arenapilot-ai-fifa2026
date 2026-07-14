import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
} from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import EmergencyActions from "../src/components/alerts/EmergencyActions";

describe("EmergencyActions", () => {
  const onEvacuate = vi.fn();
  const onMedical = vi.fn();
  const onSecurity = vi.fn();
  const onBroadcast = vi.fn();

  const defaultProps = {
    onEvacuate,
    onMedical,
    onSecurity,
    onBroadcast,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders successfully", () => {
    render(<EmergencyActions {...defaultProps} />);

    expect(
      screen.getByText(/Emergency Actions/i)
    ).toBeInTheDocument();
  });

  it("renders Evacuate button", () => {
    render(<EmergencyActions {...defaultProps} />);

    expect(
      screen.getByRole("button", {
        name: /Evacuate/i,
      })
    ).toBeInTheDocument();
  });

  it("renders Medical Response button", () => {
    render(<EmergencyActions {...defaultProps} />);

    expect(
      screen.getByRole("button", {
        name: /Medical/i,
      })
    ).toBeInTheDocument();
  });

  it("renders Security Dispatch button", () => {
    render(<EmergencyActions {...defaultProps} />);

    expect(
      screen.getByRole("button", {
        name: /Security/i,
      })
    ).toBeInTheDocument();
  });

  it("renders Broadcast Alert button", () => {
    render(<EmergencyActions {...defaultProps} />);

    expect(
      screen.getByRole("button", {
        name: /Broadcast/i,
      })
    ).toBeInTheDocument();
  });

  it("calls onEvacuate when clicked", async () => {
    const user = userEvent.setup();

    render(<EmergencyActions {...defaultProps} />);

    await user.click(
      screen.getByRole("button", {
        name: /Evacuate/i,
      })
    );

    expect(onEvacuate).toHaveBeenCalledTimes(1);
  });

  it("calls onMedical when clicked", async () => {
    const user = userEvent.setup();

    render(<EmergencyActions {...defaultProps} />);

    await user.click(
      screen.getByRole("button", {
        name: /Medical/i,
      })
    );

    expect(onMedical).toHaveBeenCalledTimes(1);
  });

  it("calls onSecurity when clicked", async () => {
    const user = userEvent.setup();

    render(<EmergencyActions {...defaultProps} />);

    await user.click(
      screen.getByRole("button", {
        name: /Security/i,
      })
    );

    expect(onSecurity).toHaveBeenCalledTimes(1);
  });

  it("calls onBroadcast when clicked", async () => {
    const user = userEvent.setup();

    render(<EmergencyActions {...defaultProps} />);

    await user.click(
      screen.getByRole("button", {
        name: /Broadcast/i,
      })
    );

    expect(onBroadcast).toHaveBeenCalledTimes(1);
  });

  it("renders all four emergency buttons", () => {
    render(<EmergencyActions {...defaultProps} />);

    expect(
      screen.getAllByRole("button").length
    ).toBeGreaterThanOrEqual(4);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <EmergencyActions {...defaultProps} />
    );

    expect(container).toMatchSnapshot();
  });
});