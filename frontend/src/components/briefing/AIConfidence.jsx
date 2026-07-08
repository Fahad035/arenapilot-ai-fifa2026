import Card from "../ui/Card";

const AIConfidence = () => {
  return (
    <Card>

      <h3 className="text-xl font-bold text-white">
        AI Confidence
      </h3>

      <div className="mt-6">

        <div className="mb-2 flex justify-between">
          <span className="text-slate-400">Confidence Score</span>
          <span className="font-bold text-emerald-400">96%</span>
        </div>

        <div className="h-3 rounded-full bg-slate-800">

          <div
            className="h-3 rounded-full bg-emerald-500"
            style={{ width: "96%" }}
          />

        </div>

        <p className="mt-5 text-slate-400">
          Generated using ArenaPilot Decision Engine + Gemini AI.
        </p>

      </div>

    </Card>
  );
};

export default AIConfidence;