// login.js

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
        
        // Example of finding a user by username and password
        const user = await collection.findOne({ username: req.body.username, password: req.body.password });

        // Close the MongoDB connection
        await client.close();

        if (user) {
            res.status(200).json({ message: 'Login successful!' });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Login failed' });
    }
};
