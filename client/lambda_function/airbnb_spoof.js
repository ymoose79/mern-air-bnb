const MongoClient = require("mongodb").MongoClient;

const MONGODB_URI = process.env.MONGODB_URI;

let _db;

let client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const clientPromise = client.connect();

module.exports.handler = async (event, context) => {

    client = await clientPromise;
    console.log("Successfully connected to MongoDB.");
    context.callbackWaitsForEmptyEventLoop = false;
    return _db;
}