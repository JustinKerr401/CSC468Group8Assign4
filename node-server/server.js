const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/sharkdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected!");
}).catch((error) => {
    console.log("MongoDB connection error:", error);
});

// Simple route to show Shark Info
app.get('/shark-info', (req, res) => {
    res.send("Shark Info: Sharks are amazing creatures! Project by Owen Guo, Justin Kerr, Sammy Mbazang, and Michael Myers!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
