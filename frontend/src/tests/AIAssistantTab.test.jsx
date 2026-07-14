import { describe, it, expect, vi,beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AIAssistantTab from "../components/assistant/AIAssistantTab";

describe("AIAssistantTab", () => {
  const analysis = {
    executiveSummary: {
      overallStatus: "Normal",
    },
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders successfully", () => {
    render(<AIAssistantTab analysis={analysis} />);

    expect(
      screen.getByText(/AI Assistant/i)
    ).toBeInTheDocument();
  });

  it("renders chat input", () => {
    render(<AIAssistantTab analysis={analysis} />);

    expect(
      screen.getByPlaceholderText(/Ask/i)
    ).toBeInTheDocument();
  });

  it("renders Send button", () => {
    render(<AIAssistantTab analysis={analysis} />);

    expect(
      screen.getByRole("button")
    ).toBeInTheDocument();
  });

  it("allows typing into chat input", async () => {
    const user = userEvent.setup();

    render(<AIAssistantTab analysis={analysis} />);

    const input =
      screen.getByPlaceholderText(/Ask/i);

    await user.type(
      input,
      "What is the current risk level?"
    );

    expect(input).toHaveValue(
      "What is the current risk level?"
    );
  });

  it("renders analysis information", () => {
    render(<AIAssistantTab analysis={analysis} />);

    expect(
      screen.getByText(/Normal/i)
    ).toBeInTheDocument();
  });

  it("renders without analysis", () => {
    render(<AIAssistantTab analysis={null} />);

    expect(
      screen.getByText(/AI Assistant/i)
    ).toBeInTheDocument();
  });

  it("send button is enabled", () => {
    render(<AIAssistantTab analysis={analysis} />);

    expect(
      screen.getByRole("button")
    ).toBeEnabled();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <AIAssistantTab analysis={analysis} />
    );

    expect(container).toMatchSnapshot();
  });
});