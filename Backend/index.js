const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware for JSON requests
app.use(express.json());

// Connect to the Database
connectDB();

// User routes
app.use("/api/v1", userRoutes);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running...",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
