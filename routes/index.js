const router = require("express").Router();

// Health check
router.get("/health", (_req, res) => {
    res.json({ status: "ok", uptime: process.uptime() });
});

// Example API route
router.get("/api/hello", (_req, res) => {
    res.json({ message: "Hello, World!" });
});

module.exports = router;