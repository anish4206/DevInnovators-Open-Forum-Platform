const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Serve Home Page (HTML)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Serve Navbar (Partial)
app.get("/partials/navbar", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "partials", "navbar.html"));
});

// Serve Login Page
app.get("/auth/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "auth", "login.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));