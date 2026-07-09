const analyzeSustainability = (scenario) => {
  const attendance = Number(scenario.attendance ?? 0);

  let carbonImpact = "Low";

  if (attendance > 60000) {
    carbonImpact = "High";
  } else if (attendance > 30000) {
    carbonImpact = "Moderate";
  }

  const suggestions = [];

  if (carbonImpact === "High") {
    suggestions.push("Increase public transport usage.");

    suggestions.push("Enable digital ticket verification.");

    suggestions.push("Deploy additional recycling stations.");
  } else {
    suggestions.push("Maintain current sustainability measures.");
  }

  return {
    score,

    recommendation,

    carbonFootprint: {
      current: 18.4,
      target: 15.0,
      unit: "tCO₂e",
    },

    energyConsumption: {
      lighting: 42,
      cooling: 31,
      broadcasting: 18,
      miscellaneous: 9,
    },

    wasteManagement: {
      recycled: 72,
      landfill: 20,
      compost: 8,
    },

    waterUsage: {
      current: 18500,
      target: 17000,
      unit: "Litres",
    },

    sustainabilityScore: Math.max(0, 100 - score),

    greenInitiatives: [
      "Solar-powered lighting active.",
      "Rainwater harvesting operational.",
      "Plastic-free food court enabled.",
      "Electric shuttle buses available.",
    ],

    recommendationsList: [
      "Reduce lighting in unused sections.",
      "Increase recycling bin coverage.",
      "Encourage public transport usage.",
      "Optimize HVAC scheduling.",
    ],

    kpi: [
      {
        label: "Carbon Reduction",
        value: "18%",
      },
      {
        label: "Renewable Energy",
        value: "46%",
      },
      {
        label: "Waste Recycled",
        value: "72%",
      },
      {
        label: "Water Saved",
        value: "11%",
      },
    ],
  };
};

export default analyzeSustainability;
