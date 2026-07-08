import { useEffect, useState } from "react";
import {
  AlertTriangle,
  Bus,
  Languages,
  Leaf,
  MapPinned,
  Sparkles,
} from "lucide-react";

const operations = [
  {
    title: "Crowd Congestion",
    location: "Gate A",
    status: "High Priority",
    description:
      "AI detected increasing congestion near Gate A. Recommend redirecting spectators to Gate C.",
    icon: AlertTriangle,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    title: "Navigation Request",
    location: "Section B12",
    status: "Optimized Route",
    description:
      "Fastest accessible path calculated. Estimated arrival time: 4 minutes.",
    icon: MapPinned,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Transport Update",
    location: "Metro Station",
    status: "Delay Detected",
    description:
      "Shuttle delay detected. AI recommends Bus Route 2 as the fastest alternative.",
    icon: Bus,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    title: "Translation Assistant",
    location: "Fan Zone",
    status: "Spanish → English",
    description:
      "Providing real-time multilingual assistance for international visitors.",
    icon: Languages,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Sustainability Alert",
    location: "Food Court",
    status: "Collection Needed",
    description:
      "Waste bin occupancy exceeded 90%. Schedule cleaning crew immediately.",
    icon: Leaf,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
];

const LiveOperations = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % operations.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const item = operations[index];
  const Icon = item.icon;

  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl">

      <div className="mb-6 flex items-center justify-between">

        <div className="flex items-center gap-2">

          <Sparkles className="text-blue-400" size={18} />

          <h3 className="font-semibold text-white">
            Live Operations Preview
          </h3>

        </div>

        <div className="flex items-center gap-2 text-xs text-green-400">

          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>

          Live

        </div>

      </div>

      <div className={`rounded-2xl ${item.bg} p-4`}>

        <div className="flex items-center gap-4">

          <div className={`rounded-xl ${item.bg} p-3`}>

            <Icon className={item.color} size={24} />

          </div>

          <div>

            <h4 className="font-semibold text-white">
              {item.title}
            </h4>

            <p className="text-sm text-slate-400">
              {item.location}
            </p>

          </div>

        </div>

        <div className="mt-5">

          <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
            {item.status}
          </span>

        </div>

        <p className="mt-5 text-sm leading-7 text-slate-300">
          {item.description}
        </p>

      </div>

      <div className="mt-6 flex justify-center gap-2">

        {operations.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === index
                ? "w-8 bg-blue-500"
                : "w-2 bg-slate-700"
            }`}
          />
        ))}

      </div>

    </div>
  );
};

export default LiveOperations;