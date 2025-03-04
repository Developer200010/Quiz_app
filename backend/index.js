const express = require("express");
const cors = require("cors");
const axios = require("axios");
const db = require("./config/DB.js");
const quizRoute = require("./routes/quizRoute.js")
// Initialize Express App
const app = express();
const PORT = process.env.PORT || 8000;

// Connect to Database
db();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the home page!" );
});

app.use("/api/quiz", quizRoute);

// Global Error Handler (optional but recommended)
// app.use((err, req, res, next) => {
//   console.error("Server Error:", err.message);
//   res.status(500).json({ error: "Internal Server Error" });
// });

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
