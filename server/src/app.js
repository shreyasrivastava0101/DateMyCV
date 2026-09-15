import express from "express";

const app = express();

app.get("/api/v1/health", (req, res) => {
  res
  .status(200)
  .json({
    success: true,
    message: "DateMyCV API is running"
  });
});

export default app;