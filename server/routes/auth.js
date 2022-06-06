const express = require("express");
const router = express.Router();

// connect to mongodb
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


router.route("/register").get(function (req, res) {
    res.send('Register ')
});

module.exports = router;