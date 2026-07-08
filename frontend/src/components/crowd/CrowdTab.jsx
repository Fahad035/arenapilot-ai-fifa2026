import CrowdChart from "../crowd/CrowdChart";
import GateOccupancy from "../crowd/GateOccupancy";
import DensityTable from "../crowd/DensityTable";
import CrowdInsights from "../crowd/CrowdInsights";
import CrowdRecommendations from "../crowd/CrowdRecommendations";

const CrowdTab = () => {
  return (
    <div className="space-y-6">

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <CrowdChart />
        </div>

        <GateOccupancy />

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <CrowdInsights />

        <DensityTable />

      </div>

      <CrowdRecommendations />

    </div>
  );
};

export default CrowdTab;