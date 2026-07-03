const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Home route
app.get("/status", (req, res) => {
    res.json({
        success: true,
        message: "Bedrock Web Service Online"
    });
});

// Example endpoint for Minecraft
app.post("/api/player", (req, res) => {

    const { playerName, health } = req.body;

    console.log(`Player: ${playerName}`);
    console.log(`Health: ${health}`);

    res.json({
        success: true,
        message: "Player data received!"
    });

});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});