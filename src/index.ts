// src/server.ts
import express from "express";
import router from "./routes/subjects";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

// Middleware
app.use(express.json());

app.use('/api/subjects', router)

// Routes
app.get("/", (_req, res) => {
    res.send("Express TypeScript server is running!");
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});