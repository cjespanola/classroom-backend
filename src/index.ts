// src/server.ts

import express from "express";

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (_req, res) => {
    res.send("Express TypeScript server is running!");
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});