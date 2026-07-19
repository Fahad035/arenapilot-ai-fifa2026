import { lazy, Suspense } from "react";

import DensityCards from "./DensityCards";
import HeatMap from "./HeatMap";
import QueueTable from "./QueueTable";
import PredictionPanel from "./PredictionPanel";
import ChartSkeleton from "./ChartSkeleton";

const CrowdChart = lazy(() => import("./CrowdChart"));

const CrowdTab = ({ analysis }) => {
  return (
    <div className="space-y-8">
      <DensityCards analysis={analysis} />

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <Suspense fallback={<ChartSkeleton />}>
            <CrowdChart analysis={analysis} />
          </Suspense>
        </div>

        <div>
          <HeatMap analysis={analysis} />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <QueueTable analysis={analysis} />

        <PredictionPanel analysis={analysis} />
      </div>
    </div>
  );
};

export default CrowdTab;
