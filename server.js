require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const indexRouter = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Request logger
app.use((req, _res, next) => {
    const ts = new Date().toISOString();
    console.log(`[${ts}] ${req.method} ${req.url}`);
    next();
});

// Routes
app.use("/", indexRouter);

// 404 handler
app.use((_req, res) => {
    res.status(404).json({ status: "error", message: "Route not found" });
});

// Global error handler
app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).json({ status: "error", message: "Internal server error" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});