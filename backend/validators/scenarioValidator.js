import { z } from "zod";

const scenarioSchema = z.object({
  eventName: z.string().min(2).max(100),

  eventType: z.enum([
    "Football Match",
    "Concert",
    "Festival",
    "Emergency Drill",
  ]),

  attendance: z.number().min(0).max(80000),

  weather: z.enum([
    "Clear",
    "Cloudy",
    "Rain",
    "Storm",
  ]),

  gateA: z.number().min(0).max(100),

  gateB: z.number().min(0).max(100),

  gateC: z.number().min(0).max(100),

  gateD: z.number().min(0).max(100),

  accessibilityRequired: z.boolean(),

  medicalIncident: z.boolean(),

  securityIncident: z.boolean(),

  emergencyMode: z.boolean(),
});

export const validateScenario = (data) => {
  return scenarioSchema.safeParse(data);
};

export default scenarioSchema;