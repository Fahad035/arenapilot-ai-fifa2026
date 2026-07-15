import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
} from "vitest";

import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import ScenarioForm from "../components/overview/ScenarioForm";
import { analyzeScenario } from "../services/analysisService";

vi.mock("../services/analysisService", () => ({
  analyzeScenario: vi.fn(),
}));

describe("ScenarioForm", () => {
  let scenarioData;
  let setScenarioData;
  let setAnalysis;
  let setLoading;

  beforeEach(() => {
    vi.clearAllMocks();

    scenarioData = {
      stadium: "",
      match: "",
      crowd: "",
      weather: "",
      incident: "",
      priority: "",
      notes: "",
    };

    setScenarioData = vi.fn((callback) => {
      if (typeof callback === "function") {
        scenarioData = callback(scenarioData);
      } else {
        scenarioData = callback;
      }
    });

    setAnalysis = vi.fn();
    setLoading = vi.fn();
  });

  const renderForm = (
    props = {}
  ) =>
    render(
      <ScenarioForm
        scenarioData={scenarioData}
        setScenarioData={setScenarioData}
        analysis={null}
        setAnalysis={setAnalysis}
        loading={false}
        setLoading={setLoading}
        {...props}
      />
    );

  it("renders successfully", () => {
    renderForm();

    expect(
      screen.getByText(/AI Scenario Builder/i)
    ).toBeInTheDocument();
  });

  it("renders all form controls", () => {
    renderForm();

    expect(
      screen.getByDisplayValue("Select Stadium")
    ).toBeInTheDocument();

    expect(
      screen.getByDisplayValue("Select Match")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/90000/i)
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(
        /Provide any additional operational information/i
      )
    ).toBeInTheDocument();
  });

  it("shows validation errors", async () => {
    const user = userEvent.setup();

    renderForm();

    await user.click(
      screen.getByRole("button", {
        name: /Generate AI Briefing/i,
      })
    );

    expect(
      screen.getByText(/Please select a stadium/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Please select a match/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Crowd size is required/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Select an incident/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Priority is required/i)
    ).toBeInTheDocument();
  });

  it("calls setScenarioData when crowd changes", () => {
    renderForm();

    fireEvent.change(
      screen.getByPlaceholderText(/90000/i),
      {
        target: {
          value: "80000",
        },
      }
    );

    expect(setScenarioData).toHaveBeenCalled();
  });

  it("shows live preview", () => {
    render(
      <ScenarioForm
        scenarioData={{
          stadium: "Lusail Stadium",
          match: "Argentina vs Brazil",
          crowd: "85000",
          incident: "Medical Emergency",
        }}
        setScenarioData={setScenarioData}
        analysis={null}
        setAnalysis={setAnalysis}
        loading={false}
        setLoading={setLoading}
      />
    );

    expect(
      screen.getByText(/Live Scenario Preview/i)
    ).toBeInTheDocument();

    expect(
  screen.getAllByText("Lusail Stadium").length
).toBeGreaterThan(0);

    expect(screen.getAllByText("Argentina vs Brazil").length).toBeGreaterThan(0);


    expect(
      screen.getByText("85000")
    ).toBeInTheDocument();
  });

  it("shows loading state", () => {
    renderForm({
      loading: true,
    });

    expect(
      screen.getByText(/Analyzing/i)
    ).toBeInTheDocument();
  });

  it("shows analysis card", () => {
    renderForm({
      analysis: {
        risk: "High",
        confidence: 95,
      },
    });

    expect(
      screen.getByText(/AI Analysis Completed/i)
    ).toBeInTheDocument();

    expect(
      screen.getAllByText("High").length
    ).toBeGreaterThan(0);

    expect(
      screen.getByText("95%")
    ).toBeInTheDocument();
  });

  it("calls analyzeScenario with valid form", async () => {
    analyzeScenario.mockResolvedValue({
      risk: "High",
      confidence: 96,
    });

    render(
      <ScenarioForm
        scenarioData={{
          stadium: "Lusail Stadium",
          match: "Argentina vs Brazil",
          crowd: "90000",
          weather: "Sunny",
          incident: "Medical Emergency",
          priority: "Critical",
          notes: "Test",
        }}
        setScenarioData={setScenarioData}
        analysis={null}
        setAnalysis={setAnalysis}
        loading={false}
        setLoading={setLoading}
      />
    );

    const user = userEvent.setup();

    await user.click(
      screen.getByRole("button", {
        name: /Generate AI Briefing/i,
      })
    );

    await waitFor(() => {
      expect(analyzeScenario).toHaveBeenCalledTimes(1);
    });

    expect(setLoading).toHaveBeenCalledWith(true);

    expect(setAnalysis).toHaveBeenCalled();

    expect(setLoading).toHaveBeenLastCalledWith(false);
  });

  it("handles API failure gracefully", async () => {
    analyzeScenario.mockRejectedValue(
      new Error("Server Error")
    );

    const spy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    render(
      <ScenarioForm
        scenarioData={{
          stadium: "Lusail Stadium",
          match: "Argentina vs Brazil",
          crowd: "90000",
          weather: "Sunny",
          incident: "Medical Emergency",
          priority: "High",
          notes: "",
        }}
        setScenarioData={setScenarioData}
        analysis={null}
        setAnalysis={setAnalysis}
        loading={false}
        setLoading={setLoading}
      />
    );

    const user = userEvent.setup();

    await user.click(
      screen.getByRole("button", {
        name: /Generate AI Briefing/i,
      })
    );

    await waitFor(() => {
      expect(analyzeScenario).toHaveBeenCalled();
    });

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });

  it("matches snapshot", () => {
    const { container } = renderForm();

    expect(container).toMatchSnapshot();
  });
});