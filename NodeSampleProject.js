const express = require('express')

const app = express()
const router = express.Router()




// Define a route handling GET requests on the root path
router.get('/', (req, res) => {
  res.json({
    message:'Hello, From Jenkins Sample Project! \n'
  });
});

router.get('/webhook', (req, res) => {
  res.send('Hello, From Jenkins Sample Project Webhook Route! \n');
});



// Start the server on port 3200
const PORT = 3200;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
