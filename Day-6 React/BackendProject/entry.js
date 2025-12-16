const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const Signup = require('./models/SignupSchema'); // your schema

const app = express();
const PORT = 8001;

// Middleware
app.use(cors()); // allow frontend requests
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/SECE')
  .then(() => console.log("MongoDB connection successful"))
  .catch(err => console.log("MongoDB connection unsuccessful", err));

// Routes
app.get('/', (req, res) => res.send("Welcome to backend server"));

app.get('/json', (req, res) => {
  res.json({ college: "SECE", Dept: "CYS", StuCount: 64 });
});

app.get('/static', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// Signup route → save to MongoDB
app.post('/signup', async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Check if email already exists
    const existingUser = await Signup.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already registered" });

    const newUser = new Signup({ email, username, password });
    await newUser.save();

    res.json({ message: "Signup successful", data: { email, username } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving user" });
  }
});

app.post('/login', async (req, res) => {
  try {
    console.log("LOGIN API HIT");          // 👈 check route hit
    console.log("REQ BODY:", req.body);    // 👈 check data

    const { email, password } = req.body;

    const user = await Signup.findOne({ email });
    console.log("USER FROM DB:", user);    // 👈 check DB result

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({ message: "Login successful" });

  } catch (error) {
    console.error("LOGIN ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});



// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
