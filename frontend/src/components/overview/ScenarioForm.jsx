import { useState } from "react";

const initialForm = {
  venue: "",
  match: "",
  crowdDensity: "Medium",
  weather: "Clear",
  transport: "Normal",
  accessibility: "Normal",
  emergency: "Low",
  language: "English",
  notes: "",
};

const ScenarioForm = ({
  setScenarioData,
  setAnalysis,
  loading,
  setLoading,
}) => {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updated = {
      ...formData,
      [name]: value,
    };

    setFormData(updated);
    setScenarioData(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // Backend integration will replace this.
    setTimeout(() => {
      setAnalysis({
        crowdDensity: "84%",
        alerts: "03",
        confidence: "97%",
        status: "Operational",
      });

      setLoading(false);
    }, 1500);
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="text-2xl font-bold text-white">
        Stadium Situation Form
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        Enter the current stadium conditions to generate an AI operational
        briefing.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">

        <div className="grid gap-6 md:grid-cols-2">

          <Input
            label="Venue"
            name="venue"
            placeholder="Estadio Azteca"
            value={formData.venue}
            onChange={handleChange}
          />

          <Input
            label="Match"
            name="match"
            placeholder="Brazil vs Spain"
            value={formData.match}
            onChange={handleChange}
          />

          <Select
            label="Crowd Density"
            name="crowdDensity"
            value={formData.crowdDensity}
            onChange={handleChange}
            options={["Low","Medium","High","Critical"]}
          />

          <Select
            label="Weather"
            name="weather"
            value={formData.weather}
            onChange={handleChange}
            options={["Clear","Rain","Storm","Extreme Heat"]}
          />

          <Select
            label="Transport Status"
            name="transport"
            value={formData.transport}
            onChange={handleChange}
            options={["Normal","Metro Delay","Heavy Traffic","Road Closure"]}
          />

          <Select
            label="Accessibility"
            name="accessibility"
            value={formData.accessibility}
            onChange={handleChange}
            options={[
              "Normal",
              "Wheelchair Assistance",
              "Medical Support",
            ]}
          />

          <Select
            label="Emergency Level"
            name="emergency"
            value={formData.emergency}
            onChange={handleChange}
            options={["Low","Medium","High","Critical"]}
          />

          <Select
            label="Announcement Language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            options={[
              "English",
              "Spanish",
              "French",
              "Portuguese",
            ]}
          />

        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Additional Notes
          </label>

          <textarea
            rows={5}
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Describe the current situation..."
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Generating AI Briefing..." : "Generate AI Operational Briefing"}
        </button>

      </form>
    </div>
  );
};

/* ---------- Reusable Components ---------- */

function Input({ label, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <input
        {...props}
        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
      />
    </div>
  );
}

function Select({ label, options, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <select
        {...props}
        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default ScenarioForm;