import { useState } from "react";
import { FaWheelchair, FaWandMagic } from "react-icons/fa6";

import Card from "../ui/Card";
import Button from "../ui/Button";

const RouteForm = ({ routeOptions, destinationOptions, onGenerate }) => {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const [accessible, setAccessible] = useState(false);

  return (
    <Card className="space-y-6">
      <h3 className="text-xl font-semibold text-white">Route Planner</h3>

      <div>
        <label className="mb-2 block text-sm text-slate-400">
          Starting Point
        </label>

        <select
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
        >
          <option value="">Select starting point</option>
          {routeOptions.length > 0 ? (
            routeOptions.map((gate) => (
              <option key={gate} value={gate}>
                {gate}
              </option>
            ))
          ) : (
            <option value="">No route data available</option>
          )}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-400">
          Destination
        </label>

        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
        >
          <option value="">Select destination</option>
          {destinationOptions.length > 0 ? (
            destinationOptions.map((checkpoint) => (
              <option key={checkpoint} value={checkpoint}>
                {checkpoint}
              </option>
            ))
          ) : (
            <option value="">No checkpoint data available</option>
          )}
        </select>
      </div>

      <label className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 p-4">
        <input
          type="checkbox"
          checked={accessible}
          onChange={() => setAccessible(!accessible)}
        />

        <FaWheelchair className="text-cyan-400" />

        <span className="text-slate-300">Accessible Step-Free Route</span>
      </label>

      <Button
        aria-label="Generate Smart Route"
        className="w-full"
        onClick={() => onGenerate({ start, destination, accessible })}
      >
        <FaWandMagic />
        Generate Smart Route
      </Button>
    </Card>
  );
};

export default RouteForm;
