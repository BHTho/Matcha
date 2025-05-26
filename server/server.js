const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://frontend:5173'
  ],
}));

app.get('/api/', (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})