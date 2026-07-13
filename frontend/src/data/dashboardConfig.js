const dashboardConfig = {
  overview: {
    title: "Overview",
    subtitle: "Full-venue situational awareness",

    cards: [
      {
        id: "aiStatus",
        title: "AI Status",
        value: "Online",
        color: "emerald",
      },
      {
        id: "crowdStatus",
        title: "Crowd Status",
        value: "Moderate",
        color: "cyan",
      },
      {
        id: "alerts",
        title: "Active Alerts",
        value: "03",
        color: "red",
      },
      {
        id: "time",
        title: "Local Time",
        value: "LIVE_TIME",
        color: "slate",
      },
    ],
  },

  crowd: {
    title: "Crowd Intelligence",
    subtitle: "Real-time density by zone",

    cards: [
      {
        id: "attendance",
        title: "Attendance",
        value: "40,000",
        color: "cyan",
      },
      {
        id: "density",
        title: "Density",
        value: "82%",
        color: "emerald",
      },
      {
        id: "capacity",
        title: "Capacity Used",
        value: "78%",
        color: "blue",
      },
      {
        id: "congestion",
        title: "Congestion",
        value: "Medium",
        color: "yellow",
      },
    ],
  },

  briefing: {
    title: "AI Briefing",
    subtitle: "AI-generated operational recommendations",

    cards: [
      {
        id: "confidence",
        title: "AI Confidence",
        value: "98%",
        color: "emerald",
      },
      {
        id: "risk",
        title: "Risk Level",
        value: "Moderate",
        color: "orange",
      },
      {
        id: "recommendation",
        title: "Recommendation",
        value: "Gate B",
        color: "cyan",
      },
      {
        id: "generated",
        title: "Generated",
        value: "Just Now",
        color: "slate",
      },
    ],
  },

  navigator: {
    title: "Navigator",
    subtitle: "Smart routing and accessibility guidance",

    cards: [
      {
        id: "gate",
        title: "Recommended Gate",
        value: "Gate D",
        color: "purple",
      },
      {
        id: "routeTime",
        title: "Route Time",
        value: "8 min",
        color: "cyan",
      },
      {
        id: "accessibility",
        title: "Accessibility",
        value: "Available",
        color: "emerald",
      },
      {
        id: "traffic",
        title: "Traffic",
        value: "Low",
        color: "yellow",
      },
    ],
  },

  operations: {
    title: "Operations",
    subtitle: "Live command center and incident monitoring",

    cards: [
      {
        id: "incidents",
        title: "Active Incidents",
        value: "05",
        color: "red",
      },
      {
        id: "medical",
        title: "Medical",
        value: "02",
        color: "cyan",
      },
      {
        id: "security",
        title: "Security",
        value: "01",
        color: "purple",
      },
      {
        id: "weather",
        title: "Weather",
        value: "29°C",
        color: "yellow",
      },
    ],
  },

  history: {
    title: "History",
    subtitle: "Previously analyzed stadium scenarios",

    cards: [
      {
        id: "scenarios",
        title: "Total Scenarios",
        value: "24",
        color: "cyan",
      },
      {
        id: "averageRisk",
        title: "Average Risk",
        value: "Medium",
        color: "orange",
      },
      {
        id: "lastAnalysis",
        title: "Last Analysis",
        value: "Today",
        color: "emerald",
      },
      {
        id: "reports",
        title: "Saved Reports",
        value: "18",
        color: "purple",
      },
    ],
  },

  assistant: {
    title: "AI Assistant",
    subtitle: "Ask ArenaPilot about the current stadium scenario",

    cards: [
      {
        id: "model",
        title: "AI Model",
        value: "Gemini 2.5",
        color: "cyan",
      },
      {
        id: "latency",
        title: "Response Time",
        value: "620 ms",
        color: "emerald",
      },
      {
        id: "conversation",
        title: "Conversations",
        value: "14",
        color: "purple",
      },
      {
        id: "status",
        title: "Status",
        value: "Ready",
        color: "green",
      },
    ],
  },

  alert: {
    title: "Alerts",
    subtitle: "Critical incidents requiring immediate attention",

    cards: [
      {
        id: "critical",
        title: "Critical Alerts",
        value: "03",
        color: "red",
      },
      {
        id: "level",
        title: "Alert Level",
        value: "High",
        color: "orange",
      },
      {
        id: "response",
        title: "Response Team",
        value: "Active",
        color: "emerald",
      },
      {
        id: "updated",
        title: "Last Update",
        value: "09:32 AM",
        color: "cyan",
      },
    ],
  },
};

export default dashboardConfig;