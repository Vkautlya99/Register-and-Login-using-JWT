// server/routes/user.js
const express = require("express");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const router = express.Router();
const { User } = require('../models/User.js');
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();

router.use(cookieParser());

router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        return res.json({ message: "User is already registered" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashPassword
    });
    await newUser.save();
    return res.json({ status: true, message: "User registered" });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.json({ message: "User is not registered" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.json({ message: "Password is incorrect" });
    }

    const token = jwt.sign({ username: user.username }, process.env.KEY, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
    return res.json({ status: true, message: "Login Successfully" });
});

router.post("/forgot-password", async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: "User is not registered" });
        }

        const token = jwt.sign({ id: user._id }, process.env.KEY, { expiresIn: "5m" });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "vkautalya1999@gmail.com",
                pass: 'jsonwebtoke@123'
            }
        });

        const mailOptions = {
            from: "vkautalya1999@gmail.com",
            to: email,
            subject: 'Reset Your Password',
            text: `http://localhost:5173/resetPassword/${token}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return res.json({ message: "Error sending email" });
            } else {
                return res.json({ status: true, message: "Email sent" });
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = { UserRouter: router };
