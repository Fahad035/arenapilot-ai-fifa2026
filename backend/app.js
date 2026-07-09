import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import aiRoutes from "./routes/aiRoutes.js";

import errorHandler from "./middleware/errorHandler.js";
import sanitizeInput from "./middleware/sanitizeInput.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(sanitizeInput);

app.use(rateLimiter);

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    application: "ArenaPilot AI",
    version: "1.0.0",
    status: "Backend Running",
  });
});

app.use("/api", aiRoutes);

app.use(errorHandler);

export default app;