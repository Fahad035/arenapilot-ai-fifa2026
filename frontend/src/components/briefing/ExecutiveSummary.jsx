import Card from "../ui/Card";

const ExecutiveSummary = ({ analysis }) => {
  return (
    <Card>

      <h3 className="text-xl font-bold text-white">
        Executive Summary
      </h3>

      <p className="mt-5 leading-8 text-slate-300">

        {analysis?.summary ||

`ArenaPilot AI is ready.

Generate an operational briefing to receive a complete executive summary covering stadium safety, crowd conditions, accessibility and transport recommendations.`}

      </p>

    </Card>
  );
};

export default ExecutiveSummary;