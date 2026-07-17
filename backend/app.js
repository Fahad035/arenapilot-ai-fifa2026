import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import aiRoutes from "./routes/aiRoutes.js";
import liveRoutes from "./routes/liveRoutes.js";

import errorHandler from "./middleware/errorHandler.js";
import sanitizeInput from "./middleware/sanitizeInput.js";
import { defaultLimiter, aiLimiter } from "./middleware/rateLimiter.js";
import chatRoutes from "./routes/chatRoutes.js";
import settingsRoutes from "./routes/settingsRoutes.js";

const app = express();

// CORS: only allow explicitly configured origins in production.
// ALLOWED_ORIGINS is a comma-separated list, e.g. "https://arenapilot-ai-fifa2026.vercel.app,http://localhost:5173"
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    // Allow non-browser requests (no Origin header, e.g. curl/health checks)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: false,
};

app.use(cors(corsOptions));

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        objectSrc: ["'none'"],
        frameAncestors: ["'none'"],
      },
    },
    referrerPolicy: { policy: "no-referrer" },
  })
);

app.use(express.json({ limit: "1mb" }));

app.use(sanitizeInput);

app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    application: "ArenaPilot AI",
    version: "1.0.0",
    status: "Backend Running",
  });
});

// Stricter limiter on AI/chat routes (expensive Gemini calls), lighter default elsewhere.
// Applied per-router (not by app-level path prefix) so /api/live and /api/settings,
// which also start with "/api", don't accidentally inherit the AI limiter.
app.use("/api", aiLimiter, aiRoutes);
app.use("/api/chat", aiLimiter, chatRoutes);
app.use("/api/live", defaultLimiter, liveRoutes);
app.use("/api/settings", defaultLimiter, settingsRoutes);

app.use(errorHandler);

export default app;