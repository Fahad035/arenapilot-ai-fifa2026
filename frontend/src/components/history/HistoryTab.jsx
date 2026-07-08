import HistoryFilters from "./HistoryFilters";
import HistoryTable from "./HistoryTable";
import HistoryStats from "./HistoryStats";

const HistoryTab = () => {
  return (
    <div className="space-y-6">

      <HistoryStats />

      <HistoryFilters />

      <HistoryTable />

    </div>
  );
};

export default HistoryTab;