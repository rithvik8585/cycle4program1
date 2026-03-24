const express = require('express'); // Import Express framework
const app = express(); // Create an Express app instance
const router = require('./router'); // Import the router module

// Mount the router at the '/api' path
app.use('/api', router);

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => { 
    console.log(`Server started on port ${PORT}`);
});