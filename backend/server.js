import dotenv from "dotenv";

dotenv.config();

import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("");
  console.log("======================================");
  console.log("🏟️ ArenaPilot AI Backend Started");
  console.log(`🚀 Server Running : http://localhost:${PORT}`);
  console.log("======================================");
  console.log("");
});