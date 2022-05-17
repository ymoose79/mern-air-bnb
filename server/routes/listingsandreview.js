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
// -----> TODO TODO TODO TODO -> adjust BSON type err on OBJECT ID
// This section will help you get a single record by id
// recordRoutes.route("/:id").get(function (req, res) {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId(req.params.id) };
//   db_connect
//     .collection("listingsAndReviews")
//     .findOne(myquery, function (err, result) {
//       if (err) throw err;
//       res.json(result);
//     });
// });

// This section will help you create a new record.
recordRoutes.route("/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  // values need to be adjusted <------------------------
  let myobj = {
    name: req.body.name,
    summary: req.body.summary,
    description: req.body.description,
  };
  db_connect.collection("listingsAndReviews").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    // values need to be adjusted <------------------------
    $set: {
      name: req.body.name,
      summary: req.body.summary,
      description: req.body.description,
    },
  }
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("listingsAndReviews").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

recordRoutes.route("/location").get(function (req, res) {

  let db_connect = dbo.getDb("sample_airbnb");
  console.log({ city })
  let myobj = {
    "address.market": city
  }
  db_connect
    .collection("listingsAndReviews")
    .find(myobj)
    .limit(50)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

module.exports = recordRoutes;