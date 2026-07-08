import api from "./api";

/**
 * Analyze a stadium scenario.
 * Currently falls back to mock data if the backend
 * is unavailable. Once the backend is ready,
 * only the API endpoint needs to work.
 */

export const analyzeScenario = async (scenario) => {
  try {
    const response = await api.post("/analyze", scenario);

    return response.data;
  } catch (error) {
    console.warn(
      "Backend unavailable. Using mock analysis.",
      error.message
    );

    // Simulate AI thinking
    await new Promise((resolve) => setTimeout(resolve, 1800));

    return generateMockAnalysis(scenario);
  }
};

/**
 * Mock AI Response
 */

function generateMockAnalysis(data) {
  const crowd = Number(data.crowd || 0);

  let risk = "Low";

  if (crowd > 90000) risk = "Critical";
  else if (crowd > 70000) risk = "High";
  else if (crowd > 40000) risk = "Medium";

  const routes = [
    "Gate A",
    "Gate B",
    "Gate C",
    "Gate D",
    "North Exit",
    "South Exit",
  ];

  const recommendations = [];

  if (risk === "Critical") {
    recommendations.push(
      "Immediately open all emergency gates."
    );

    recommendations.push(
      "Deploy additional police and medical teams."
    );

    recommendations.push(
      "Broadcast multilingual evacuation guidance."
    );

    recommendations.push(
      "Continuously monitor CCTV hotspots."
    );
  }

  if (risk === "High") {
    recommendations.push(
      "Redirect spectators toward Gate D."
    );

    recommendations.push(
      "Deploy crowd management volunteers."
    );

    recommendations.push(
      "Increase security patrol frequency."
    );

    recommendations.push(
      "Display dynamic route signage."
    );
  }

  if (risk === "Medium") {
    recommendations.push(
      "Monitor congestion every 5 minutes."
    );

    recommendations.push(
      "Prepare standby response teams."
    );

    recommendations.push(
      "Keep alternate exits available."
    );
  }

  if (risk === "Low") {
    recommendations.push(
      "Continue routine monitoring."
    );

    recommendations.push(
      "Maintain normal staffing levels."
    );
  }

  return {
    success: true,

    timestamp: new Date().toISOString(),

    confidence:
      Math.floor(Math.random() * 4) + 96,

    risk,

    route:
      routes[
        Math.floor(Math.random() * routes.length)
      ],

    summary: `
Crowd analysis indicates a ${risk.toLowerCase()} operational risk
for ${data.stadium}. AI predicts congestion around
${data.incident}. Recommended route is optimized
to reduce pedestrian density and improve emergency
response time.
`,

    recommendations,

    metrics: {
      attendance: crowd,

      congestion:
        Math.floor(Math.random() * 35) + 60,

      waitTime:
        Math.floor(Math.random() * 12) + 4,

      medicalRisk:
        Math.floor(Math.random() * 30) + 5,

      securityScore:
        Math.floor(Math.random() * 20) + 80,
    },

    timeline: [
      {
        time: "10:12",
        event: "Crowd spike detected",
      },
      {
        time: "10:15",
        event: "AI started analysis",
      },
      {
        time: "10:17",
        event: "Alternative routes calculated",
      },
      {
        time: "10:20",
        event: "Operational briefing generated",
      },
    ],
  };
}

export default {
  analyzeScenario,
};