import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import AIAssistantTab from "../components/assistant/AIAssistantTab";

/* ---------------- Mock Children ---------------- */

vi.mock("../components/assistant/ChatWindow", () => ({
  default: () => <div>Chat Window</div>,
}));

vi.mock("../components/assistant/SuggestedPrompts", () => ({
  default: () => <div>Suggested Prompts</div>,
}));

describe("AIAssistantTab", () => {
  const analysis = {
    confidence: 98,
  };

  it("renders ChatWindow", () => {
    render(
      <AIAssistantTab analysis={analysis} />
    );

    expect(
      screen.getByText("Chat Window")
    ).toBeInTheDocument();
  });

  it("renders SuggestedPrompts", () => {
    render(
      <AIAssistantTab analysis={analysis} />
    );

    expect(
      screen.getByText("Suggested Prompts")
    ).toBeInTheDocument();
  });

  it("renders without analysis", () => {
    render(
      <AIAssistantTab analysis={null} />
    );

    expect(
      screen.getByText("Chat Window")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Suggested Prompts")
    ).toBeInTheDocument();
  });
});