const MongoClient = require("mongodb").MongoClient;

const MONGODB_URI = process.env.MONGODB_URI;

let _db;

const client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports.handler = async (event, context) => {
    // otherwise the connection will never complete, since
    // we keep the DB connection alive
    context.callbackWaitsForEmptyEventLoop = false;
    client.connect(function (err, db) {
        // Verify we got a good "db" object
        if (db) {
            const dbObj = db.db("sample_airbnb");
            _db = JSON.stringify(dbObj)
            console.log("Successfully connected to MongoDB.");
        } else {
            console.log(err)
        }
    });
    return _db;
}