import {
  FaFutbol,
  FaCloudSun,
  FaExclamationTriangle,
  FaFlag,
  FaMagic,
} from "react-icons/fa";

import Card from "../ui/Card";
import Input from "../ui/Input";
import SelectField from "./SelectField";
import ScenarioPreview from "./ScenarioPreview";
import ScenarioActionBar from "./ScenarioActionBar";
import ScenarioAnalysisStatus from "./ScenarioAnalysisStatus";
import useScenarioForm from "./useScenarioForm";
import {
  STADIUMS,
  MATCHES,
  INCIDENTS,
  PRIORITIES,
  WEATHER_OPTIONS,
} from "./scenarioForm.constants";

const ScenarioForm = ({
  scenarioData,
  setScenarioData,
  analysis,
  setAnalysis,
  loading,
  setLoading,
}) => {
  const { errors, handleChange, handleGenerate } = useScenarioForm({
    scenarioData,
    setScenarioData,
    setAnalysis,
    setLoading,
  });

  return (
    <Card className="space-y-8">
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

      <div className="grid gap-6 md:grid-cols-2">
        <SelectField
          field="stadium"
          label="Stadium"
          icon={FaFutbol}
          value={scenarioData.stadium}
          options={STADIUMS}
          placeholder="Select Stadium"
          error={errors.stadium}
          onChange={handleChange}
        />

        <SelectField
          field="match"
          label="Match"
          value={scenarioData.match}
          options={MATCHES}
          placeholder="Select Match"
          error={errors.match}
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Input
          label="Estimated Crowd Size"
          type="number"
          placeholder="e.g. 90000"
          value={scenarioData.crowd || ""}
          onChange={(e) => handleChange("crowd", e.target.value)}
          error={errors.crowd}
        />

        <SelectField
          field="weather"
          label="Weather"
          icon={FaCloudSun}
          value={scenarioData.weather}
          options={WEATHER_OPTIONS}
          placeholder="Weather Condition"
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SelectField
          field="incident"
          label="Incident Type"
          icon={FaExclamationTriangle}
          value={scenarioData.incident}
          options={INCIDENTS}
          placeholder="Select Incident"
          error={errors.incident}
          onChange={handleChange}
        />

        <SelectField
          field="priority"
          label="Priority"
          icon={FaFlag}
          value={scenarioData.priority}
          options={PRIORITIES}
          placeholder="Select Priority"
          error={errors.priority}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Additional Notes
        </label>

        <textarea
          rows={5}
          placeholder="Provide any additional operational information..."
          value={scenarioData.notes || ""}
          onChange={(e) => handleChange("notes", e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
        />
      </div>

      <ScenarioPreview scenarioData={scenarioData} />

      <ScenarioActionBar loading={loading} onGenerate={handleGenerate} />

      <ScenarioAnalysisStatus analysis={analysis} />
    </Card>
  );
};

export default ScenarioForm;
