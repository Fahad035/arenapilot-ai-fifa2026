import {
    FaExclamationTriangle,
    FaUserShield,
    FaHeartbeat,
    FaCloudRain,
    FaInfoCircle,
    FaClock,
} from "react-icons/fa";

import { motion } from "framer-motion";

import Card from "../ui/Card";
import AlertSeverityBadge from "./AlertSeverityBadge";
import EmptyAlertState from "./EmptyAlertState";

const defaultAlerts = [
    {
        id: 1,
        title: "Crowd Congestion",
        location: "Gate B Entrance",
        severity: "High",
        time: "2 min ago",
        icon: FaExclamationTriangle,
    },
    {
        id: 2,
        title: "Medical Assistance Required",
        location: "Section D - Block 12",
        severity: "Medium",
        time: "6 min ago",
        icon: FaHeartbeat,
    },
    {
        id: 3,
        title: "Security Monitoring",
        location: "VIP Corridor",
        severity: "Low",
        time: "9 min ago",
        icon: FaUserShield,
    },
    {
        id: 4,
        title: "Weather Advisory",
        location: "Entire Venue",
        severity: "Info",
        time: "15 min ago",
        icon: FaCloudRain,
    },
];

const LiveAlertsList = ({ analysis }) => {
    const alerts =
        analysis?.alerts ??
        (import.meta.env.DEV ? defaultAlerts : []);

    return (
        <Card>
            {/* Header */}

            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="font-heading text-2xl font-bold text-white">
                        Live Alerts
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        Active operational events detected by ArenaPilot AI.
                    </p>
                </div>

                <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                    {alerts.length} Active
                </div>
            </div>

            {/* Empty State */}

            {alerts.length === 0 ? (
                <EmptyAlertState />
            ) : (
                <div className="space-y-4">
                    {alerts.map((alert, index) => {
                        const Icon = alert.icon || FaInfoCircle;

                        return (
                            <motion.div
                                key={alert.id || index}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-cyan-500/40"
                            >
                                <div className="flex items-start justify-between">
                                    {/* Left */}

                                    <div className="flex gap-4">
                                        <div className="rounded-xl bg-slate-800 p-3">
                                            <Icon className="text-xl text-cyan-400" />
                                        </div>

                                        <div>
                                            <h3 className="font-heading text-lg font-semibold text-white">
                                                {alert.title}
                                            </h3>

                                            <p className="mt-1 text-sm text-slate-400">
                                                {alert.location}
                                            </p>

                                            <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                                                <FaClock />

                                                {alert.time}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Severity */}

                                    <AlertSeverityBadge severity={alert.severity} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            )}
        </Card>
    );
};

export default LiveAlertsList;