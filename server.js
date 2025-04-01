const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public"))); // Serve static assets
app.use(express.static(path.join(__dirname, "views")));  // Serve HTML files

// Serve home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Example: Serve login page
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

// API routes (for backend logic)
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));