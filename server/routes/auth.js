const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const User = require("../model/model_user")

mongoose.connect('mongodb://127.0.0.1:27017/sample_airbnb')

router.route("/api/register").post(async function (req, res) {
    try {
        const user = await User.create({
            name: req.body.name,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password
        })
        res.send("great success ")
    } catch (error) {
        console.log("error: ", error)
    }
    res.send('Register ')
});

router.route("/api/login").post(async function (req, res) {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    if (user) {
        return res.send(user)
    } else {
        return console.log("error user block")
    }
});

module.exports = router;
