import Card from "../ui/Card";

const QuickSummary = ({ analysis }) => {
  return (
    <Card>
      <h3 className="text-xl font-bold text-white">
        AI Quick Summary
      </h3>

      {analysis ? (
        <div className="mt-5 space-y-4">
          <div>
            <p className="text-sm text-slate-400">Risk Level</p>
            <p className="text-lg font-semibold text-red-400">
              {analysis.risk || "High"}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-400">Executive Summary</p>
            <p className="text-slate-300">
              {analysis.summary ||
                "Crowd density is increasing near Gate C. Recommend redirecting spectators through Gate D and deploying additional volunteers."}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-400">Top Recommendation</p>
            <p className="text-cyan-400">
              {analysis.recommendation ||
                "Open Gate D and activate multilingual announcements."}
            </p>
          </div>
        </div>
      ) : (
        <div className="py-10 text-center">
          <h4 className="text-lg font-semibold text-white">
            AI Ready
          </h4>

          <p className="mt-2 text-slate-400">
            Submit a stadium scenario to generate an operational briefing.
          </p>
        </div>
      )}
    </Card>
  );
};

export default QuickSummary;