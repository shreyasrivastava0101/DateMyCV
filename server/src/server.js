import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`DateMyCV server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Failed to start server:", error.message);
  });