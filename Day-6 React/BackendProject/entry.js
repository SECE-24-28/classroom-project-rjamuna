const express = require("express");
const mdb = require("mongoose");
const Signup = require("./models/SignupSchema");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.json());
app.use(cors());

// ✅ FIXED MONGODB URL (single slash)
mdb
  .connect(
    "mongodb+srv://cys:cys@cluster0.vsb5beg.mongodb.net/SECE"
  )
  .then(() => console.log("MongoDB Connection Successful"))
  .catch((err) =>
    console.log("MongoDB Connection Unsuccessful", err)
  );

app.get("/", (req, res) => {
  res.send("Server started successfully");
});

app.get("/", (req, res) => {
  res.send("Server started successfully");
});

// ✅ ADD THIS ROUTE
app.get("/json", (req, res) => {
  res.json({
    College: "SECE",
    Dept: "CYS",
    StuCount: 64,
  });
});

// ✅ SIGNUP
app.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        Message: "User already exists",
        isSignup: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newSignup = new Signup({
      email,
      username,
      password: hashedPassword,
    });

    await newSignup.save();

    res.status(200).json({
      Message: "Signup Successful",
      isSignup: true,
    });
  } catch (err) {
    res.status(500).json({
      Message: "Signup Failed",
      isSignup: false,
    });
  }
});

// ✅ LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await Signup.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({
        message: "User not found",
        isLoggedIn: false,
      });
    }

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isValidPassword) {
      return res.status(401).json({
        message: "Incorrect Password",
        isLoggedIn: false,
      });
    }

    res.status(200).json({
      message: "Login Successful",
      isLoggedIn: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Login Error",
      isLoggedIn: false,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
