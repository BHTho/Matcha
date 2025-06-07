const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const pg = require('pg');
const fs = require('fs');
const path = require('path');

const {Pool} = pg;
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
});

(async () => {
  const res = await pool.query('SELECT NOW()');
  console.log(res.rows[0] ? "Postgres Connection Successful" : "Error: Could not connect to Postgres");
})();

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://frontend:5173'
  ],
}));

// Need to change this to be an API GET
app.use('/api/images', express.static(path.join(__dirname, 'user_uploads')));

app.get('/api/', (req, res) => {
    res.send("Hello World!")
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});