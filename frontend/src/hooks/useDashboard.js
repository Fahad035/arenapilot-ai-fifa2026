import { useContext } from "react";
import DashboardContext from "../context/DashboardContext";

const useDashboard = () => useContext(DashboardContext);

export default useDashboard;