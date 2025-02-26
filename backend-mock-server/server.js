const express = require("express");
const WebSocket = require("ws");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

const wss = new WebSocket.Server({ port: 5001 });

wss.on("connection", (ws) => {
    console.log("Client connected");

    setInterval(() => {
        let flowRate = (Math.random() * 10).toFixed(2);
        let leakDetected = flowRate > 7; // Simulate leak if flow > 7 L/min

        ws.send(JSON.stringify({ flowRate, leakDetected }));
    }, 2000);
});

app.listen(PORT, () => console.log(`Mock backend running on http://localhost:${PORT}`));
