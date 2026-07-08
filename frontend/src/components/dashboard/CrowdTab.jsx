import CrowdChart from "../crowd/CrowdChart";
import DensityTable from "../crowd/DensityTable";

const CrowdTab = () => {
  return (
    <div className="space-y-8">

      <div>

        <h2 className="text-3xl font-bold text-white">
          Crowd Intelligence
        </h2>

        <p className="mt-2 text-slate-400">
          Monitor occupancy trends and identify high-risk congestion zones
          across the stadium.
        </p>

      </div>

      <CrowdChart />

      <DensityTable />

    </div>
  );
};

export default CrowdTab;