import { useEffect, useMemo, useState } from "react";

import HistoryFilters from "./HistoryFilters";
import HistoryTable from "./HistoryTable";
import HistoryStats from "./HistoryStats";
import EmptyHistory from "./EmptyHistory";
import Card from "../ui/Card";
import { fetchScenarioHistory } from "../../services/historyService";

const HistoryTab = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadHistory = async () => {
      setLoading(true);

      try {
        const records = await fetchScenarioHistory();

        if (mounted) {
          setHistory(records);
        }
      } catch {
        if (mounted) {
          setHistory([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadHistory();

    return () => {
      mounted = false;
    };
  }, []);

  const sortedHistory = useMemo(() => {
    return [...history].sort((left, right) => {
      const leftTime = new Date(left?.timestamp ?? 0).getTime();
      const rightTime = new Date(right?.timestamp ?? 0).getTime();

      return rightTime - leftTime;
    });
  }, [history]);

  return (
    <div className="space-y-6">

      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              History
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Saved scenario analyses and AI summaries.
            </p>
          </div>

          <div className="mt-3 flex items-center gap-2 md:mt-0">
            <span className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1 text-xs font-semibold text-slate-200">
              {sortedHistory.length} analyses
            </span>
          </div>
        </div>
      </div>

      {loading ? (
        <Card>
          <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
            <div className="h-10 w-10 animate-pulse rounded-2xl border border-slate-800 bg-slate-950" />
            <h2 className="text-xl font-bold text-white md:text-2xl">
              Loading History
            </h2>
            <p className="text-slate-400">
              Fetching saved scenarios from the backend.
            </p>
          </div>
        </Card>
      ) : sortedHistory.length === 0 ? (
        <EmptyHistory />
      ) : (
        <>
          <HistoryStats history={sortedHistory} />

          <HistoryFilters />

          <HistoryTable history={sortedHistory} />
        </>
      )}

    </div>
  );
};

export default HistoryTab;
