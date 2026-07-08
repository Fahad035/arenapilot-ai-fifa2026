import DensityCards from "./DensityCards";
import CrowdChart from "./CrowdChart";
import HeatMap from "./HeatMap";
import QueueTable from "./QueueTable";
import PredictionPanel from "./PredictionPanel";

const CrowdTab = ({ analysis }) => {
  return (
    <div className="space-y-8">

      {/* ================= KPI Cards ================= */}

      <DensityCards analysis={analysis} />

      {/* ================= Main Analytics ================= */}

      <div className="grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <CrowdChart analysis={analysis} />
        </div>

        <div>
          <HeatMap analysis={analysis} />
        </div>

      </div>

      {/* ================= Bottom ================= */}

      <div className="grid gap-8 lg:grid-cols-2">

        <QueueTable analysis={analysis} />

        <PredictionPanel analysis={analysis} />

      </div>

    </div>
  );
};

export default CrowdTab;