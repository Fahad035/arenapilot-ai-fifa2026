import AIResponse from "../briefing/AIResponse";

const BriefingTab = ({ analysis }) => {
  return (
    <div className="space-y-8">

      <div>

        <h2 className="text-3xl font-bold text-white">
          AI Operations Briefing
        </h2>

        <p className="mt-2 text-slate-400">
          AI-generated operational recommendations based on the current
          stadium situation.
        </p>

      </div>

      <AIResponse analysis={analysis} />

    </div>
  );
};

export default BriefingTab;