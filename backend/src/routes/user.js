const express = require('express');
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel'); // Adjust the path as necessary

const router = express.Router();

router.post("/signup", async (req, res) => {
    console.log(req.body);
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !password || !email) {
        return res.status(422).json({ error: "Please fill all the values properly!" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModel({ firstname, lastname, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: "User registered successfully", _id: user._id });
    } catch (err) {
        console.log("Error during signup:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const userExist = await userModel.findOne({ email });

    if (!userExist) {
        return res.status(422).json({ error: "User doesn't exist!" });
    }

    const isPasswordValid = await bcrypt.compare(password, userExist.password);
    if (!isPasswordValid) {
        return res.status(422).json({ error: "Invalid password!" });
    }

    res.status(200).json({ message: "User logged in successfully", user: userExist });
});

module.exports = router;

