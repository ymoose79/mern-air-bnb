const mongoose = require('mongoose');

let isConnected = false; // cache the DB connection across invocations

async function connectToDatabase() {
    if (isConnected) {
        console.log('=> using existing database connection');
        return;
    }

    console.log('=> creating new database connection');
    await mongoose.connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 5000,  // fail fast if cannot connect
    });

    isConnected = true;
}

exports.handler = async function (event, context) {
    console.log("Function invoked");

    try {
        await connectToDatabase();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Successfully connected to MongoDB!' }),
        };
    } catch (err) {
        console.error("MongoDB connection error: ", err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err.message }),
        };
    }
};
