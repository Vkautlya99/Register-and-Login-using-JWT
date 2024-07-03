const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const { UserRouter } = require('./routes/user.js'); 
const cookieParser = require("cookie-parser");

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(cookieParser())
// backend/app.js
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


mongoose.connect("mongodb://127.0.0.1:27017/login-register");

app.use("/auth", UserRouter);



app.listen(process.env.PORT, () => {
    console.log("App is running!");
});
