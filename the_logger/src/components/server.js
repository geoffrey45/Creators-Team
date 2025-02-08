require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const users = []; // Temporary storage for users

const secret = process.env.JWT_SECRET;
console.log(secret);


// Register Route
app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    
    // Check if user exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });

    res.json({ message: "User registered successfully" });
});

// Login Route
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    // Find user correctly
    const user = users.find(user => user.username === username);
    
    if (!user) return res.status(400).json({ message: "User not found" });

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT Token
    const token = jwt.sign({ username }, secret, { expiresIn: "1h" });

    res.json({ token });
});

// Protected Route
app.get("/profile", (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "Unauthorized" });

    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
        res.json({ message: `Welcome ${user.username}!`, user });
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
