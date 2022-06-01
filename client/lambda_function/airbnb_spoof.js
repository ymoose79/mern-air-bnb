const { MongoClient } = require("mongodb")

const MONGODB_URI = process.env.MONGODB_URI;


let client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const clientPromise = client.connect();

module.exports.handler = async (event, context) => {

    client = await clientPromise;
    console.log("Successfully connected to MongoDB.");
    context.callbackWaitsForEmptyEventLoop = false;
    return client.db("sample_airbnb");
}