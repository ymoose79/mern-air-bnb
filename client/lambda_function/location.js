const { MongoClient } = require("mongodb")

const MONGODB_URI = process.env.MONGODB_URI;


let client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const clientPromise = client.connect();

const queryLocalCity = async (db, local) => {

    const { city } = local
    const myObj = {
        "address.market": city
    }

    const localCity = await db
        .collection("listingsAndReviews")
        .find(myObj)
        .limit(50)
        .toArray();
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(localCity)
    };
}

module.exports.handler = async (event, context) => {
    client = await clientPromise;
    context.callbackWaitsForEmptyEventLoop = false;
    console.log('event qsp = ', event.queryStringParameters)
    const local = event.queryStringParameters.location
    console.log(local)
    const dbConn = await client.db("sample_airbnb")
    return queryLocalCity(dbConn, local);
}