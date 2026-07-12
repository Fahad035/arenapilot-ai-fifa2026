import { useEffect, useState } from "react";

import {
  FaRobot,
  FaCopy,
  FaCheck,
  FaBrain,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";

import Card from "../ui/Card";

const AIResponse = ({ analysis }) => {
  const [displayText, setDisplayText] = useState("");
  const [copied, setCopied] = useState(false);

  const response =
    analysis?.briefing ||
    analysis?.aiBriefing ||
    "";


  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index++;

      setDisplayText(response.slice(0, index));

      if (index >= response.length) {
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [response]);

  const copyResponse = async () => {
    await navigator.clipboard.writeText(response);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const confidence =
    analysis?.analysis?.crowd?.prediction?.confidence || 97;

  const recommendations =
    analysis?.analysis?.risk?.recommendations || [
      "Monitor high density zones.",
      "Optimize entry flow.",
      "Maintain emergency readiness.",
    ];

  return (
    <Card className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-xl bg-cyan-500/10 p-4">
            <FaRobot
              size={28}
              className="text-cyan-400"
            />
          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              Gemini AI Response
            </h2>

            <p className="text-sm text-slate-400">
              AI generated operational intelligence
            </p>

          </div>

        </div>

        <button
          onClick={copyResponse}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-slate-700
            bg-slate-900
            px-4
            py-3
            text-sm
            text-white
            transition
            hover:border-cyan-500
          "
        >
          {copied ? (
            <>
              <FaCheck className="text-emerald-400" />
              Copied
            </>
          ) : (
            <>
              <FaCopy />
              Copy
            </>
          )}
        </button>

      </div>

      {/* AI Text */}

      <div
        className="
          rounded-2xl
          border
          border-cyan-500/20
          bg-cyan-500/5
          p-6
        "
      >

        <p
          className="
            whitespace-pre-line
            leading-8
            text-slate-200
          "
        >

          {displayText}

          <span className="animate-pulse text-cyan-400">
            |
          </span>

        </p>

      </div>

      {/* Intelligence Metrics */}

      <div className="grid gap-5 md:grid-cols-3">

        <div
          className="
            rounded-xl
            border
            border-purple-500/20
            bg-purple-500/10
            p-5
          "
        >

          <div className="flex items-center gap-3">

            <FaBrain className="text-purple-400" />

            <span className="text-sm text-slate-400">
              Reasoning
            </span>

          </div>

          <h3 className="mt-3 font-bold text-white">
            Rules + Gemini
          </h3>

        </div>

        <div
          className="
            rounded-xl
            border
            border-blue-500/20
            bg-blue-500/10
            p-5
          "
        >

          <div className="flex items-center gap-3">

            <FaChartLine className="text-blue-400" />

            <span className="text-sm text-slate-400">
              Confidence
            </span>

          </div>

          <h3 className="mt-3 text-2xl font-bold text-blue-400">
            {confidence}%
          </h3>

        </div>

        <div
          className="
            rounded-xl
            border
            border-emerald-500/20
            bg-emerald-500/10
            p-5
          "
        >

          <div className="flex items-center gap-3">

            <FaLightbulb className="text-emerald-400" />

            <span className="text-sm text-slate-400">
              Status
            </span>

          </div>

          <h3 className="mt-3 font-bold text-emerald-400">
            {analysis?.dashboard?.overallStatus || "Action Ready"}
          </h3>

        </div>

      </div>

      {/* Key Insights */}

      <div>

        <h3 className="mb-5 text-xl font-bold text-white">
          AI Key Insights
        </h3>

        <div className="space-y-3">

          {recommendations.map((item, index) => (
            <div
              key={index}
              className="
                rounded-xl
                border
                border-slate-800
                bg-slate-950
                p-4
                text-slate-300
              "
            >

              <span className="mr-3 text-cyan-400">
                {index + 1}.
              </span>

              {item}

            </div>
          ))}

        </div>

      </div>

    </Card>
  );
};

export default AIResponse;