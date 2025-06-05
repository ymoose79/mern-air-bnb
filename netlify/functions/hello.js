const mongoose = require('mongoose');

let isConnected;

const connectToDatabase = async () => {
    if (isConnected) {
        console.log('=> using existing database connection');
        return;
    }

    console.log('=> using new database connection');
    await mongoose.connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 5000, // fail faster if cannot connect
    });

    isConnected = mongoose.connection.readyState;
};

exports.handler = async (event, context) => {
    try {
        await connectToDatabase();

        // Your logic here
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'MongoDB connection successful!' }),
        };
    } catch (err) {
        console.error('Function error:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err.message }),
        };
    }
};
