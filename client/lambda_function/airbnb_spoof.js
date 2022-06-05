const { MongoClient } = require("mongodb")

const MONGODB_URI = process.env.MONGODB_URI;


let client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const clientPromise = client.connect();

const queryDb = async (db) => {
    const listAndRev = await db
        .collection("listingsAndReviews")
        .find({})
        .limit(100)
        .toArray()
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(listAndRev)
    }
}

module.exports.handler = async (event, context) => {
    client = await clientPromise;
    context.callbackWaitsForEmptyEventLoop = false;
    const dbConn = await client.db("sample_airbnb")
    return queryDb(dbConn);
}

