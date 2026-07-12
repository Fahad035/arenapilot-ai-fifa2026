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

      {loading ? (
        <Card>

          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold text-white">
              Loading History
            </h2>

            <p className="mt-3 text-slate-400">
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