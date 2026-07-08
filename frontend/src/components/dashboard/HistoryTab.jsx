import HistoryTable from "../history/HistoryTable";

const HistoryTab = ({ history }) => {
  return (
    <div className="space-y-8">

      <div>

        <h2 className="text-3xl font-bold text-white">
          Analysis History
        </h2>

        <p className="mt-2 text-slate-400">
          Review previously generated AI operational briefings.
        </p>

      </div>

      <HistoryTable history={history} />

    </div>
  );
};

export default HistoryTab;