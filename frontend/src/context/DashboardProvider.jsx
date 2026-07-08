import { useState } from "react";
import DashboardContext from "./DashboardContext";

const DashboardProvider = ({ children }) => {
  const [scenarioData, setScenarioData] = useState({});
  const [analysis, setAnalysis] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <DashboardContext.Provider
      value={{
        scenarioData,
        setScenarioData,

        analysis,
        setAnalysis,

        history,
        setHistory,

        loading,
        setLoading,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;