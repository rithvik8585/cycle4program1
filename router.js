const express = require('express');
const route = express.Router(); // Create a router instance

// Handle GET request
route.get('/', (req, res) => {
    res.status(200); // Set the response status to 200
    res.send('Hello, World! In GET'); // Send the text response
});

// Handle POST request
route.post('/', (req, res) => {
    res.status(201); // Set the response status to 201
    res.send('Hello, World! In POST'); // Send the text response
});

module.exports = route; // Export the router