const analyzeSustainability = (scenario) => {
  const attendance = Number(scenario.attendance ?? 0);

  let carbonImpact = "Low";
  let score = 20;

  if (attendance > 60000) {
    carbonImpact = "High";
    score = 80;
  } else if (attendance > 30000) {
    carbonImpact = "Moderate";
    score = 50;
  }

  const recommendations = [];

  if (carbonImpact === "High") {
    recommendations.push(
      "Increase public transport usage."
    );

    recommendations.push(
      "Enable digital ticket verification."
    );

    recommendations.push(
      "Deploy additional recycling stations."
    );
  } else if (carbonImpact === "Moderate") {
    recommendations.push(
      "Encourage spectators to use public transport."
    );

    recommendations.push(
      "Increase waste segregation."
    );
  } else {
    recommendations.push(
      "Maintain current sustainability measures."
    );
  }

  return {
    score,

    recommendation:
      recommendations[0],

    carbonImpact,

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

    sustainabilityScore:
      Math.max(0, 100 - score),

    greenInitiatives: [
      "Solar-powered lighting active.",
      "Rainwater harvesting operational.",
      "Plastic-free food court enabled.",
      "Electric shuttle buses available.",
    ],

    recommendations,

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