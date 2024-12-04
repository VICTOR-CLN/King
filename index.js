// Import the Express library
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a route for HTTP GET requests to the root URL ('/')
app.get('/', (req, res) => {
    // Send a response with the text "hello to my world everyone"
    res.send("hello to my world everyone");
});

// Start the application and have it listen on port 3000
app.listen(3000, (err, data) => {
    // Log a message to the console to indicate that the server is running
    console.log('app listening on http://localhost:3000');
});

 