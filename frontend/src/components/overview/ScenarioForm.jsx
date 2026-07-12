import { useState } from "react";
import {
  FaFutbol,
  FaCloudSun,
  FaExclamationTriangle,
  FaFlag,
  FaMagic,
} from "react-icons/fa";

import Card from "../ui/Card";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { analyzeScenario } from "../../services/analysisService";

const stadiums = [
  "Lusail Stadium",
  "Al Bayt Stadium",
  "974 Stadium",
  "Al Janoub Stadium",
  "Education City Stadium",
];

const matches = [
  "Argentina vs Brazil",
  "England vs France",
  "Germany vs Spain",
  "Portugal vs Italy",
  "Netherlands vs Belgium",
];

const incidents = [
  "Crowd Congestion",
  "Medical Emergency",
  "Security Threat",
  "Gate Delay",
  "Transport Delay",
  "VIP Movement",
];

const priorities = [
  "Low",
  "Medium",
  "High",
  "Critical",
];

const weatherOptions = [
  "Sunny",
  "Cloudy",
  "Rainy",
  "Windy",
];

const ScenarioForm = ({
  scenarioData,
  setScenarioData,
  analysis,
  setAnalysis,
  loading,
  setLoading,
}) => {

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setScenarioData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!scenarioData.stadium)
      newErrors.stadium = "Please select a stadium.";

    if (!scenarioData.match)
      newErrors.match = "Please select a match.";

    if (!scenarioData.crowd)
      newErrors.crowd = "Crowd size is required.";

    if (!scenarioData.incident)
      newErrors.incident = "Select an incident.";

    if (!scenarioData.priority)
      newErrors.priority = "Priority is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleGenerate = async () => {
    if (!validate()) return;

    setLoading(true);

    try {

      const payload = {
        eventName: scenarioData.match,

        eventType: "Football Match",

        attendance: Number(scenarioData.crowd),

        gateA: Math.round(Number(scenarioData.crowd) * 0.25),

        gateB: Math.round(Number(scenarioData.crowd) * 0.25),

        gateC: Math.round(Number(scenarioData.crowd) * 0.25),

        gateD: Math.round(Number(scenarioData.crowd) * 0.25),

        accessibilityRequired: false,

        medicalIncident:
          scenarioData.incident === "Medical Emergency",

        securityIncident:
          scenarioData.incident === "Security Threat",

        emergencyMode:
          scenarioData.priority === "Critical",
      };

      const result = await analyzeScenario(payload);

      setAnalysis(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            AI Scenario Builder
          </h2>

          <p className="mt-2 text-slate-400">
            Enter a stadium scenario and let ArenaPilot AI generate an
            operational briefing.
          </p>

        </div>

        <div className="rounded-xl bg-cyan-500/10 p-4 text-cyan-400">
          <FaMagic size={24} />
        </div>

      </div>

      {/* FORM STARTS BELOW */}
      {/* ================= FIRST ROW ================= */}

      <div className="grid gap-6 md:grid-cols-2">

        {/* Stadium */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-300">
            Stadium
          </label>

          <div className="relative">

            <FaFutbol className="absolute left-4 top-4 text-slate-500" />

            <select
              value={scenarioData.stadium || ""}
              onChange={(e) =>
                handleChange("stadium", e.target.value)
              }
              className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-4 text-white outline-none transition focus:border-cyan-500"
            >
              <option value="">Select Stadium</option>

              {stadiums.map((stadium) => (
                <option
                  key={stadium}
                  value={stadium}
                >
                  {stadium}
                </option>
              ))}

            </select>

          </div>

          {errors.stadium && (
            <p className="mt-2 text-sm text-red-400">
              {errors.stadium}
            </p>
          )}

        </div>

        {/* Match */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-300">
            Match
          </label>

          <select
            value={scenarioData.match || ""}
            onChange={(e) =>
              handleChange("match", e.target.value)
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
          >
            <option value="">
              Select Match
            </option>

            {matches.map((match) => (
              <option
                key={match}
                value={match}
              >
                {match}
              </option>
            ))}

          </select>

          {errors.match && (
            <p className="mt-2 text-sm text-red-400">
              {errors.match}
            </p>
          )}

        </div>

      </div>

      {/* ================= SECOND ROW ================= */}

      <div className="grid gap-6 md:grid-cols-2">

        <Input
          label="Estimated Crowd Size"
          type="number"
          placeholder="e.g. 90000"
          value={scenarioData.crowd || ""}
          onChange={(e) =>
            handleChange("crowd", e.target.value)
          }
          error={errors.crowd}
        />

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-300">
            Weather
          </label>

          <div className="relative">

            <FaCloudSun className="absolute left-4 top-4 text-slate-500" />

            <select
              value={scenarioData.weather || ""}
              onChange={(e) =>
                handleChange("weather", e.target.value)
              }
              className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-4 text-white outline-none transition focus:border-cyan-500"
            >
              <option value="">
                Weather Condition
              </option>

              {weatherOptions.map((weather) => (
                <option
                  key={weather}
                  value={weather}
                >
                  {weather}
                </option>
              ))}

            </select>

          </div>

        </div>

      </div>

      {/* ================= THIRD ROW ================= */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-300">
            Incident Type
          </label>

          <div className="relative">

            <FaExclamationTriangle className="absolute left-4 top-4 text-slate-500" />

            <select
              value={scenarioData.incident || ""}
              onChange={(e) =>
                handleChange("incident", e.target.value)
              }
              className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-4 text-white outline-none transition focus:border-cyan-500"
            >
              <option value="">
                Select Incident
              </option>

              {incidents.map((incident) => (
                <option
                  key={incident}
                  value={incident}
                >
                  {incident}
                </option>
              ))}

            </select>

          </div>

          {errors.incident && (
            <p className="mt-2 text-sm text-red-400">
              {errors.incident}
            </p>
          )}

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-300">
            Priority
          </label>

          <div className="relative">

            <FaFlag className="absolute left-4 top-4 text-slate-500" />

            <select
              value={scenarioData.priority || ""}
              onChange={(e) =>
                handleChange("priority", e.target.value)
              }
              className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-4 text-white outline-none transition focus:border-cyan-500"
            >
              <option value="">
                Select Priority
              </option>

              {priorities.map((priority) => (
                <option
                  key={priority}
                  value={priority}
                >
                  {priority}
                </option>
              ))}

            </select>

          </div>

          {errors.priority && (
            <p className="mt-2 text-sm text-red-400">
              {errors.priority}
            </p>
          )}

        </div>

      </div>

      {/* ================= NOTES ================= */}

      <div>

        <label className="mb-2 block text-sm font-medium text-slate-300">
          Additional Notes
        </label>

        <textarea
          rows={5}
          placeholder="Provide any additional operational information..."
          value={scenarioData.notes || ""}
          onChange={(e) =>
            handleChange("notes", e.target.value)
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
        />

      </div>

      {/* ================= LIVE PREVIEW ================= */}

      <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">

        <h3 className="mb-4 text-lg font-semibold text-cyan-300">
          Live Scenario Preview
        </h3>

        <div className="grid gap-4 text-sm md:grid-cols-2">

          <div>
            <span className="text-slate-500">
              Stadium
            </span>

            <p className="mt-1 text-white">
              {scenarioData.stadium || "--"}
            </p>
          </div>

          <div>
            <span className="text-slate-500">
              Match
            </span>

            <p className="mt-1 text-white">
              {scenarioData.match || "--"}
            </p>
          </div>

          <div>
            <span className="text-slate-500">
              Crowd
            </span>

            <p className="mt-1 text-white">
              {scenarioData.crowd || "--"}
            </p>
          </div>

          <div>
            <span className="text-slate-500">
              Incident
            </span>

            <p className="mt-1 text-white">
              {scenarioData.incident || "--"}
            </p>
          </div>

        </div>

      </div>
      {/* ================= ACTION BAR ================= */}

      <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h3 className="text-lg font-semibold text-white">
            Ready to Generate AI Briefing
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            ArenaPilot AI will analyze the scenario using the Rules Engine
            and generate operational recommendations.
          </p>

        </div>

        <Button
          onClick={handleGenerate}
          disabled={loading}
          className="flex items-center justify-center gap-3 px-8 py-3"
        >
          {loading ? (
            <>
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Analyzing...
            </>
          ) : (
            <>
              <FaMagic />
              Generate AI Briefing
            </>
          )}
        </Button>

      </div>

      {/* ================= ANALYSIS STATUS ================= */}

      {analysis && (

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <h3 className="text-lg font-bold text-emerald-400">
                AI Analysis Completed
              </h3>

              <p className="mt-2 text-slate-300">
                Your operational briefing has been generated successfully.
                Review the AI Summary, Crowd Intelligence, Navigator,
                and Operations tabs for detailed recommendations.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-slate-950/60 p-4 text-center">

                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Risk
                </p>

                <h3 className="mt-2 text-xl font-bold text-red-400">
                  {analysis.risk}
                </h3>

              </div>

              <div className="rounded-xl bg-slate-950/60 p-4 text-center">

                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Confidence
                </p>

                <h3 className="mt-2 text-xl font-bold text-cyan-400">
                  {analysis.confidence}%
                </h3>

              </div>

            </div>

          </div>

        </div>

      )}

    </Card>
  );
};

export default ScenarioForm;