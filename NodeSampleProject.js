const express = require('express')
const path = require('path')

const app = express()
const router = express.Router()


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


// Define a route handling GET requests on the root path
router.get('/', (req, res) => {
  // res.json({ message:'Hello, From Jenkins Sample Project ! \n' });
  res.sendFile(path.join(__dirname,'public','index.html'))
});


router.get('/webhook', (req, res) => {
  res.send('Hello, From Jenkins Sample Project Webhook Page! \n');
});


// Start the server on port 3200
const PORT = 3200;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
