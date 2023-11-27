// Importing required modules
const http = require('http');

// Creating a server
const server = http.createServer((req, res) => {

  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response
  res.end('Hello, From Jenkins Sample Project! \n');

});

// Listening on port 3000
const PORT = 3200;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});