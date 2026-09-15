import express from "express";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRouter);

app.get("/api/v1/health", (req, res) => {
  res
  .status(200)
  .json({
    success: true,
    message: "DateMyCV API is running"
  });
});

export default app;