// register.js

const { MongoClient } = require('mongodb');

// MongoDB URI stored in environment variable
const mongoURI = process.env.MONGO_URI;

module.exports = async (req, res) => {
    try {
        // Connect to MongoDB using MongoClient
        const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();

        // Example MongoDB operations
        const database = client.db('your-database');
        const collection = database.collection('users');
        
        // Example of inserting a document
        const result = await collection.insertOne({ username: req.body.username, password: req.body.password });

        // Close the MongoDB connection
        await client.close();

        // Respond to the request
        res.status(200).json({ message: 'User registered successfully!' });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Failed to register user' });
    }
};
