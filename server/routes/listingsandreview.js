const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
recordRoutes.route("/").get(function (req, res) {
  let db_connect = dbo.getDb("sample_airbnb");
  db_connect
    .collection("listingsAndReviews")
    .find({})
    .limit(100)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

recordRoutes.route("/location").get(function (req, res) {

  let db_connect = dbo.getDb("sample_airbnb");
  const { city } = req.query
  const myObj = {
    "address.market": city
  }

  db_connect
    .collection("listingsAndReviews")
    .find(myObj)
    .limit(50)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

module.exports = recordRoutes;