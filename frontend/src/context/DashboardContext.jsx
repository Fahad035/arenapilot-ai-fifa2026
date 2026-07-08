import { createContext,  useState } from "react";

const DashboardContext = createContext(null);

export const DashboardProvider = ({ children }) => {
  const [scenarioData, setScenarioData] = useState({});
  const [analysis, setAnalysis] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const value = {
    scenarioData,
    setScenarioData,

    analysis,
    setAnalysis,

    history,
    setHistory,

    loading,
    setLoading,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
