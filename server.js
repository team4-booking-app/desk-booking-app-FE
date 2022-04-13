const express = require("express");

const API_HOST = process.env.API_HOST || "localhost:8080";
const PORT = process.env.PORT || 8080;

const buildPath = "dist/desk-booking-app";

// Initialize
const app = express();

// Serve static resources from 'build' folder
app.use(express.static(buildPath));

// Otherwise serve index.html
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + buildPath + "/index.html"));
});

app.listen(PORT);
