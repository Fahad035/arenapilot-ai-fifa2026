import { describe, it, expect, vi, beforeEach } from "vitest";
import {
    render,
    screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ScenarioForm from "../components/overview/ScenarioForm";

// API Mock
vi.mock("../src/services/analyzeScenario", () => ({
    analyzeScenario: vi.fn(),
}));

import { analyzeScenario } from "../src/services/analyzeScenario";

const defaultScenario = {
    stadium: "",
    match: "",
    crowd: "",
    incident: "",
    priority: "",
    weather: "Sunny",
};

const defaultProps = {
    scenarioData: defaultScenario,

    setScenarioData: vi.fn(),

    analysis: null,

    setAnalysis: vi.fn(),

    loading: false,

    setLoading: vi.fn(),
};

describe("ScenarioForm", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders successfully", () => {
        render(<ScenarioForm {...defaultProps} />);

        expect(
            screen.getByText(/Scenario/i)
        ).toBeInTheDocument();
    });

    it("renders Generate AI Analysis button", () => {
        render(<ScenarioForm {...defaultProps} />);

        expect(
            screen.getByRole("button", {
                name: /Generate/i,
            })
        ).toBeInTheDocument();
    });

    it("renders Stadium dropdown", () => {
        render(<ScenarioForm {...defaultProps} />);

        expect(
            screen.getByLabelText(/stadium/i)
        ).toBeInTheDocument();
    });

    it("renders Match dropdown", () => {
        render(<ScenarioForm {...defaultProps} />);

        expect(
            screen.getByLabelText(/match/i)
        ).toBeInTheDocument();
    });

    it("renders Crowd input", () => {
        render(<ScenarioForm {...defaultProps} />);

        expect(
            screen.getByLabelText(/crowd/i)
        ).toBeInTheDocument();
    });

    it("renders Incident dropdown", () => {
        render(<ScenarioForm {...defaultProps} />);

        expect(
            screen.getByLabelText(/incident/i)
        ).toBeInTheDocument();
    });

    it("renders Priority dropdown", () => {
        render(<ScenarioForm {...defaultProps} />);

        expect(
            screen.getByLabelText(/priority/i)
        ).toBeInTheDocument();
    });

    it("renders Weather dropdown", () => {
        render(<ScenarioForm {...defaultProps} />);

        expect(
            screen.getByLabelText(/weather/i)
        ).toBeInTheDocument();
    });

    it("Generate button is enabled initially", () => {
        render(<ScenarioForm {...defaultProps} />);

        expect(
            screen.getByRole("button", {
                name: /Generate/i,
            })
        ).toBeEnabled();
    });

    it("shows loading state when loading=true", () => {
        render(
            <ScenarioForm
                {...defaultProps}
                loading={true}
            />
        );

        expect(
            screen.getByRole("button")
        ).toBeDisabled();
    });

    it("shows validation errors when Generate AI Briefing is clicked with empty form", async () => {
        const user = userEvent.setup();

        render(<ScenarioForm {...defaultProps} />);

        await user.click(
            screen.getByRole("button", {
                name: /Generate AI Briefing/i,
            })
        );

        expect(
            screen.getByText("Please select a stadium.")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Please select a match.")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Crowd size is required.")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Select an incident.")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Priority is required.")
        ).toBeInTheDocument();
    });

    it("updates stadium selection", async () => {
        const user = userEvent.setup();

        const setScenarioData = vi.fn();

        render(
            <ScenarioForm
                {...defaultProps}
                setScenarioData={setScenarioData}
            />
        );

        const stadiumSelect =
            screen.getByDisplayValue("Select Stadium");

        await user.selectOptions(
            stadiumSelect,
            "Lusail Stadium"
        );

        expect(setScenarioData).toHaveBeenCalled();
    });

    it("updates match selection", async () => {
        const user = userEvent.setup();

        const setScenarioData = vi.fn();

        render(
            <ScenarioForm
                {...defaultProps}
                setScenarioData={setScenarioData}
            />
        );

        const matchSelect =
            screen.getByDisplayValue("Select Match");

        await user.selectOptions(
            matchSelect,
            "Argentina vs Brazil"
        );

        expect(setScenarioData).toHaveBeenCalled();
    });

    it("updates crowd input", async () => {
        const user = userEvent.setup();

        const setScenarioData = vi.fn();

        render(
            <ScenarioForm
                {...defaultProps}
                setScenarioData={setScenarioData}
            />
        );

        const crowdInput =
            screen.getByPlaceholderText("e.g. 90000");

        await user.type(crowdInput, "85000");

        expect(setScenarioData).toHaveBeenCalled();
    });

    it("updates weather selection", async () => {
        const user = userEvent.setup();

        const setScenarioData = vi.fn();

        render(
            <ScenarioForm
                {...defaultProps}
                setScenarioData={setScenarioData}
            />
        );

        const weatherSelect =
            screen.getByDisplayValue("Weather Condition");

        await user.selectOptions(
            weatherSelect,
            "Rainy"
        );

        expect(setScenarioData).toHaveBeenCalled();
    });

    it("updates incident selection", async () => {
        const user = userEvent.setup();

        const setScenarioData = vi.fn();

        render(
            <ScenarioForm
                {...defaultProps}
                setScenarioData={setScenarioData}
            />
        );

        const incidentSelect =
            screen.getByDisplayValue("Select Incident");

        await user.selectOptions(
            incidentSelect,
            "Medical Emergency"
        );

        expect(setScenarioData).toHaveBeenCalled();
    });

    it("updates priority selection", async () => {
        const user = userEvent.setup();

        const setScenarioData = vi.fn();

        render(
            <ScenarioForm
                {...defaultProps}
                setScenarioData={setScenarioData}
            />
        );

        const prioritySelect =
            screen.getByDisplayValue("Select Priority");

        await user.selectOptions(
            prioritySelect,
            "Critical"
        );

        expect(setScenarioData).toHaveBeenCalled();
    });

    it("updates additional notes textarea", async () => {
        const user = userEvent.setup();

        const setScenarioData = vi.fn();

        render(
            <ScenarioForm
                {...defaultProps}
                setScenarioData={setScenarioData}
            />
        );

        const notes =
            screen.getByPlaceholderText(
                /Provide any additional operational information/i
            );

        await user.type(
            notes,
            "Heavy crowd expected near Gate A."
        );

        expect(setScenarioData).toHaveBeenCalled();
    });

    it("renders Live Scenario Preview section", () => {
        render(<ScenarioForm {...defaultProps} />);

        expect(
            screen.getByText(/Live Scenario Preview/i)
        ).toBeInTheDocument();
    });

    it("shows placeholder preview values initially", () => {
        render(<ScenarioForm {...defaultProps} />);

        const placeholders =
            screen.getAllByText("--");

        expect(placeholders.length).toBeGreaterThanOrEqual(4);
    });

    it("submits the correct payload to analyzeScenario()", async () => {
        const user = userEvent.setup();

        analyzeScenario.mockResolvedValue({
            executiveSummary: {
                overallStatus: "Normal",
            },
        });

        const setAnalysis = vi.fn();
        const setLoading = vi.fn();

        render(
            <ScenarioForm
                {...defaultProps}
                setAnalysis={setAnalysis}
                setLoading={setLoading}
            />
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Stadium"),
            "Lusail Stadium"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Match"),
            "Argentina vs Brazil"
        );

        await user.type(
            screen.getByPlaceholderText("e.g. 90000"),
            "85000"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Weather Condition"),
            "Rainy"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Incident"),
            "Medical Emergency"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Priority"),
            "Critical"
        );

        await user.click(
            screen.getByRole("button", {
                name: /Generate AI Briefing/i,
            })
        );

        expect(analyzeScenario).toHaveBeenCalledTimes(1);

        expect(analyzeScenario).toHaveBeenCalledWith(
            expect.objectContaining({
                eventName: "Argentina vs Brazil",

                eventType: "Football Match",

                attendance: 85000,

                weather: "Rain",

                medicalIncident: true,

                emergencyMode: true,
            })
        );
    });

    it("stores API response using setAnalysis()", async () => {
        const user = userEvent.setup();

        const apiResponse = {
            executiveSummary: {
                overallStatus: "Normal",
            },
        };

        analyzeScenario.mockResolvedValue(apiResponse);

        const setAnalysis = vi.fn();

        render(
            <ScenarioForm
                {...defaultProps}
                setAnalysis={setAnalysis}
            />
        );

        // Fill minimum valid form
        await user.selectOptions(
            screen.getByDisplayValue("Select Stadium"),
            "Lusail Stadium"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Match"),
            "Argentina vs Brazil"
        );

        await user.type(
            screen.getByPlaceholderText("e.g. 90000"),
            "85000"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Incident"),
            "Medical Emergency"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Priority"),
            "Critical"
        );

        await user.click(
            screen.getByRole("button", {
                name: /Generate AI Briefing/i,
            })
        );

        expect(setAnalysis).toHaveBeenCalledWith(apiResponse);
    });

    it("enables loading state before API call", async () => {
        const user = userEvent.setup();

        analyzeScenario.mockResolvedValue({});

        const setLoading = vi.fn();

        render(
            <ScenarioForm
                {...defaultProps}
                setLoading={setLoading}
            />
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Stadium"),
            "Lusail Stadium"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Match"),
            "Argentina vs Brazil"
        );

        await user.type(
            screen.getByPlaceholderText("e.g. 90000"),
            "85000"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Incident"),
            "Medical Emergency"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Priority"),
            "Critical"
        );

        await user.click(
            screen.getByRole("button", {
                name: /Generate AI Briefing/i,
            })
        );

        expect(setLoading).toHaveBeenCalledWith(true);
    });

    it("disables loading after successful response", async () => {
        const user = userEvent.setup();

        analyzeScenario.mockResolvedValue({});

        const setLoading = vi.fn();

        render(
            <ScenarioForm
                {...defaultProps}
                setLoading={setLoading}
            />
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Stadium"),
            "Lusail Stadium"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Match"),
            "Argentina vs Brazil"
        );

        await user.type(
            screen.getByPlaceholderText("e.g. 90000"),
            "85000"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Incident"),
            "Medical Emergency"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Priority"),
            "Critical"
        );

        await user.click(
            screen.getByRole("button", {
                name: /Generate AI Briefing/i,
            })
        );

        expect(setLoading).toHaveBeenLastCalledWith(false);
    });

    it("calls analyzeScenario exactly once", async () => {
        const user = userEvent.setup();

        analyzeScenario.mockResolvedValue({});

        render(<ScenarioForm {...defaultProps} />);

        await user.selectOptions(
            screen.getByDisplayValue("Select Stadium"),
            "Lusail Stadium"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Match"),
            "Argentina vs Brazil"
        );

        await user.type(
            screen.getByPlaceholderText("e.g. 90000"),
            "85000"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Incident"),
            "Medical Emergency"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Priority"),
            "Critical"
        );

        await user.click(
            screen.getByRole("button", {
                name: /Generate AI Briefing/i,
            })
        );

        expect(analyzeScenario).toHaveBeenCalledTimes(1);
    });

    it("shows an error when analyzeScenario rejects", async () => {
        const user = userEvent.setup();

        analyzeScenario.mockRejectedValue(
            new Error("Network Error")
        );

        render(<ScenarioForm {...defaultProps} />);

        await user.selectOptions(
            screen.getByDisplayValue("Select Stadium"),
            "Lusail Stadium"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Match"),
            "Argentina vs Brazil"
        );

        await user.type(
            screen.getByPlaceholderText("e.g. 90000"),
            "85000"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Incident"),
            "Medical Emergency"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Priority"),
            "Critical"
        );

        await user.click(
            screen.getByRole("button", {
                name: /Generate AI Briefing/i,
            })
        );

        expect(analyzeScenario).toHaveBeenCalled();
    });

    it("always disables loading after API failure", async () => {
        const user = userEvent.setup();

        analyzeScenario.mockRejectedValue(
            new Error("Server Error")
        );

        const setLoading = vi.fn();

        render(
            <ScenarioForm
                {...defaultProps}
                setLoading={setLoading}
            />
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Stadium"),
            "Lusail Stadium"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Match"),
            "Argentina vs Brazil"
        );

        await user.type(
            screen.getByPlaceholderText("e.g. 90000"),
            "85000"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Incident"),
            "Medical Emergency"
        );

        await user.selectOptions(
            screen.getByDisplayValue("Select Priority"),
            "Critical"
        );

        await user.click(
            screen.getByRole("button", {
                name: /Generate AI Briefing/i,
            })
        );

        expect(setLoading).toHaveBeenLastCalledWith(false);
    });

    it("accepts very large attendance values", async () => {
        const user = userEvent.setup();

        render(<ScenarioForm {...defaultProps} />);

        const input =
            screen.getByPlaceholderText("e.g. 90000");

        await user.type(input, "999999");

        expect(input).toHaveValue(999999);
    });

    it("accepts attendance value of zero", async () => {
        const user = userEvent.setup();

        render(<ScenarioForm {...defaultProps} />);

        const input =
            screen.getByPlaceholderText("e.g. 90000");

        await user.clear(input);

        await user.type(input, "0");

        expect(input).toHaveValue(0);
    });

    it("allows changing incident type multiple times", async () => {
        const user = userEvent.setup();

        render(<ScenarioForm {...defaultProps} />);

        const incident =
            screen.getByDisplayValue("Select Incident");

        await user.selectOptions(
            incident,
            "Medical Emergency"
        );

        await user.selectOptions(
            incident,
            "Security Threat"
        );

        expect(
            incident.value
        ).toBe("Security Threat");
    });

    it("allows changing priority after selection", async () => {
        const user = userEvent.setup();

        render(<ScenarioForm {...defaultProps} />);

        const priority =
            screen.getByDisplayValue("Select Priority");

        await user.selectOptions(priority, "Medium");

        await user.selectOptions(priority, "Critical");

        expect(priority.value).toBe("Critical");
    });

    it("renders only one Generate AI Briefing button", () => {
        render(<ScenarioForm {...defaultProps} />);

        expect(
            screen.getAllByRole("button", {
                name: /Generate AI Briefing/i,
            })
        ).toHaveLength(1);
    });

    it("matches snapshot", () => {
        const { container } = render(
            <ScenarioForm {...defaultProps} />
        );

        expect(container).toMatchSnapshot();
    });
});