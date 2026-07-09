const stadiumKnowledge = {
  gates: {
    "Gate A": {
      capacity: 18000,
      accessible: true,
      nearestParking: "P1",
      nearestMetro: "Metro Station A",
    },

    "Gate B": {
      capacity: 15000,
      accessible: false,
      nearestParking: "P2",
      nearestMetro: "Metro Station B",
    },

    "Gate C": {
      capacity: 22000,
      accessible: true,
      nearestParking: "VIP Parking",
      nearestMetro: "Metro Station C",
    },

    "Gate D": {
      capacity: 18000,
      accessible: true,
      nearestParking: "P2",
      nearestMetro: "Metro Station D",
    },
  },

  facilities: {
    medical: [
      "North Medical Center",
      "South Medical Center",
    ],

    food: [
      "Food Court A",
      "Food Court B",
      "Food Court C",
    ],

    restrooms: [
      "Zone A",
      "Zone B",
      "Zone C",
    ],
  },

  emergency: {
    evacuationRoutes: [
      "North Exit",
      "South Exit",
      "East Exit",
      "West Exit",
    ],

    assemblyPoints: [
      "Assembly A",
      "Assembly B",
    ],
  },
};

export default stadiumKnowledge;