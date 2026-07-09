const stadiumConfig = {
  name: "ArenaPilot National Stadium",

  capacity: 80000,

  gates: [
    "Gate A",
    "Gate B",
    "Gate C",
    "Gate D",
    "VIP Gate",
    "Media Gate",
  ],

  emergencyExits: [
    "Exit 1",
    "Exit 2",
    "Exit 3",
    "Exit 4",
  ],

  medicalCenters: [
    "Medical Center North",
    "Medical Center South",
  ],

  parkingZones: [
    "P1",
    "P2",
    "VIP Parking",
  ],

  transport: {
    metro: true,
    shuttle: true,
    taxi: true,
    rideshare: true,
  },
};

export default stadiumConfig;