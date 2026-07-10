const mockChatResponse = ({ message, analysis }) => {
  const lower = message.toLowerCase();

  if (lower.includes("congestion") || lower.includes("crowd")) {
    return `Current crowd congestion is ${
      analysis?.metrics?.congestion ?? 74
    }%. ArenaPilot recommends redirecting spectators toward ${
      analysis?.route ?? "Gate D"
    } to improve crowd flow.`;
  }

  if (lower.includes("route") || lower.includes("gate")) {
    return `The recommended entry route is ${
      analysis?.route ?? "Gate D"
    }. This path currently has the lowest congestion and shortest estimated waiting time.`;
  }

  if (lower.includes("risk")) {
    return `The current operational risk level is ${
      analysis?.risk ?? "Medium"
    }. Continue monitoring crowd density and security coverage.`;
  }

  if (
    lower.includes("medical") ||
    lower.includes("ambulance")
  ) {
    return `Medical readiness is ${
      100 - (analysis?.metrics?.medicalRisk ?? 18)
    }%. Emergency response teams remain available.`;
  }

  if (
    lower.includes("security") ||
    lower.includes("police")
  ) {
    return `Security coverage is ${
      analysis?.metrics?.securityScore ?? 92
    }%. No major security incidents have been reported.`;
  }

  return `ArenaPilot AI has analyzed the current stadium scenario. Crowd operations remain stable with a ${
    analysis?.risk ?? "Medium"
  } risk level. Continue following the recommended operational guidance.`;
};

export default mockChatResponse;