const { MongoClient } = require("mongodb");
const Db = process.env.MONGODB_URI;
let cachedDb = null;

const connectToDatabase = async (uri) => {
    console.log('apple')
    if (cachedDb) return cachedDb;

    const client = new MongoClient(Db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    cachedDb = client.db(Db);
    return cachedDb;
}

module.exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    console.log({ event }, { context })
    connectToDatabase(Db)
}

