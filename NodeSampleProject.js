const express = require('express');
const app = express();

// Define a route handling GET requests on the root path
app.get('/', (req, res) => {
  res.send('Hello, From Jenkins Sample Project! \n');
});

// Start the server on port 3200
const PORT = 3200;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
