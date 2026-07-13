import { useEffect, useMemo, useState } from "react";

import {
  FaBell,
  FaCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";


import dashboardConfig from "../../data/dashboardConfig";

const colorClasses = {
  emerald: {
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
  },

  cyan: {
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
  },

  red: {
    border: "border-red-500/20",
    bg: "bg-red-500/10",
    text: "text-red-400",
  },

  orange: {
    border: "border-orange-500/20",
    bg: "bg-orange-500/10",
    text: "text-orange-400",
  },

  yellow: {
    border: "border-yellow-500/20",
    bg: "bg-yellow-500/10",
    text: "text-yellow-400",
  },

  purple: {
    border: "border-purple-500/20",
    bg: "bg-purple-500/10",
    text: "text-purple-400",
  },

  blue: {
    border: "border-blue-500/20",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
  },

  slate: {
    border: "border-slate-700",
    bg: "bg-slate-900/70",
    text: "text-white",
  },

  green: {
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
  },
};

const DashboardHeader = ({
  activeTab,
  analysis,
}) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateClock();

    const interval = setInterval(
      updateClock,
      1000
    );

    return () => clearInterval(interval);
  }, []);

  const current =
    dashboardConfig[activeTab] ??
    dashboardConfig.overview;

  const cards = useMemo(() => {
    return current.cards.map((card) => {
      let value = card.value;

      switch (card.id) {
        case "time":
          value = time;
          break;

        case "attendance":
          value =
            analysis?.metrics?.attendance ??
            card.value;
          break;

        case "density":
          value =
            analysis?.metrics?.crowdDensity ??
            card.value;
          break;

        case "capacity":
          value =
            analysis?.metrics?.capacity ??
            card.value;
          break;

        case "congestion":
          value =
            analysis?.analysis?.risk?.level ??
            card.value;
          break;

        case "confidence":
          value =
            analysis?.confidence ??
            card.value;
          break;

        case "risk":
          value =
            analysis?.risk ??
            card.value;
          break;

        case "recommendation":
          value =
            analysis?.route ??
            card.value;
          break;

        case "generated":
          value = "Just Now";
          break;

        case "gate":
          value =
            analysis?.route ??
            card.value;
          break;

        case "routeTime":
          value =
            analysis?.routeAnalysis
              ?.estimatedTime ??
            card.value;
          break;

        case "accessibility":
          value =
            analysis?.analysis
              ?.accessibility?.status ??
            card.value;
          break;

        case "traffic":
          value =
            analysis?.analysis
              ?.traffic?.status ??
            card.value;
          break;

        case "medical":
          value =
            analysis?.metrics
              ?.medicalRisk ??
            card.value;
          break;

        case "security":
          value =
            analysis?.metrics
              ?.securityScore ??
            card.value;
          break;

        case "weather":
          value =
            analysis?.analysis?.weather ??
            card.value;
          break;

        default:
          break;
      }

      return {
        ...card,
        value,
      };
    });
  }, [analysis, current, time]);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">

      <div className="flex items-center justify-between px-6 py-3">

        {/* Left */}

        <div>

          <div className="flex items-center gap-4">


            <div>

              <h1 className="font-heading text-xl font-bold tracking-tight text-white">
                {current.title}
              </h1>

              <p className=" font-body mt-1 text-sm text-slate-400">
                {current.subtitle}
              </p>

            </div>

          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">

            <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">

              <FaMapMarkerAlt />

              Lusail Stadium

            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">

              <FaCircle className="animate-pulse text-[10px]" />

              Live Operations

            </div>

            

          </div>

        </div>

        {/* Right */}

        <div className="flex gap-2">

          {cards.map((card) => {

            const theme =
              colorClasses[card.color] ??
              colorClasses.slate;

            return (

              <div
                key={card.id}
                className={`min-w-42.5 rounded-2xl border ${theme.border} ${theme.bg} px-3 py-1.5 transition duration-300 hover:scale-[1.02]`}
              >

                <p className="text-xs uppercase tracking-widest text-slate-500">

                  {card.title}

                </p>

                <div className="mt-3 flex items-center gap-3">

                  {card.id === "alerts" ||
                    card.id === "critical" ? (
                    <FaBell className={theme.text} />
                  ) : null}

                  <h3
                    className={`text-xl font-mono ${theme.text}`}
                  >
                    {card.value}
                  </h3>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </header>
  );
};

export default DashboardHeader;