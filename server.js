const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse form data

// Serve static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views"))); // Serve HTML files from views directory

// Explicitly serve partials 
app.use('/partials', express.static(path.join(__dirname, 'views/partials')));

// Import and use the main router
// const router = require("./routes/router");
// app.use("/api", router);  // All API routes will be prefixed with /api

// Serve Home Page (HTML)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Serve Login Page
app.get("/auth/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "auth", "login.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));