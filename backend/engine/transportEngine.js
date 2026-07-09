const analyzeTransport = (scenario) => {
  const attendance = Number(scenario.attendance ?? 0);

  let trafficLevel = "Low";
  let score = 20;

  if (attendance > 60000) {
    trafficLevel = "Heavy";
    score = 85;
  } else if (attendance > 35000) {
    trafficLevel = "Moderate";
    score = 55;
  }

  const recommendation =
    trafficLevel === "Heavy"
      ? "Increase shuttle frequency and deploy additional traffic officers."
      : trafficLevel === "Moderate"
      ? "Monitor parking occupancy and traffic flow."
      : "Current transportation resources are sufficient.";

  return {
    score,

    trafficLevel,

    recommendation,

    parkingOccupancy: {
      north: 82,
      south: 64,
      east: 71,
      west: 55,
    },

    shuttleService: [
      {
        route: "North Loop",
        status: "Running",
        frequency: "Every 5 min",
      },
      {
        route: "South Loop",
        status: "Running",
        frequency: "Every 8 min",
      },
      {
        route: "VIP Shuttle",
        status: "Priority",
        frequency: "On Demand",
      },
    ],

    emergencyVehicles: [
      {
        type: "Ambulance",
        available: 4,
        status: "Ready",
      },
      {
        type: "Fire Rescue",
        available: 2,
        status: "Ready",
      },
      {
        type: "Police Patrol",
        available: 8,
        status: "Active",
      },
    ],

    resourceStatus: [
      {
        resource: "Medical Teams",
        available: 12,
        required: 10,
        status: "Sufficient",
      },
      {
        resource: "Security Staff",
        available: 48,
        required: 45,
        status: "Sufficient",
      },
      {
        resource: "Traffic Officers",
        available: 18,
        required: 20,
        status: "Low",
      },
    ],

    trafficFlow: [
      {
        location: "North Entrance",
        congestion: 68,
      },
      {
        location: "East Parking",
        congestion: 42,
      },
      {
        location: "VIP Entrance",
        congestion: 25,
      },
      {
        location: "South Exit",
        congestion: 74,
      },
    ],

    deploymentPlan: [
      "Deploy two traffic officers to Gate A.",
      "Keep one ambulance on standby near the North Entrance.",
      "Increase shuttle frequency after the event.",
      "Maintain emergency vehicle corridor clearance.",
    ],
  };
};

export default analyzeTransport;