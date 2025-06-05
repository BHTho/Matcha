const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express(); //Assigning express to app variable
const port = 8000;
const cors = require('cors');
const pg = require('pg');
const db = require('./models'); // Importing the database models
const User = require('./models/userModel');
const userController = require('./controllers/userController');
const authMiddleware = require('./middleware/userAuth');

//Set up environment variables
dotenv.config();

// Synchronize database models before using them
db.sequelize.sync()
  .then(() => {
    console.log('Database models synchronized');
  })
  .catch((err) => {
    console.error('Error synchronizing database models:', err);
  });
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
pool.connect()
  .then(client => {
    console.log("Connected to Postgres successfully (test connection)");
    client.release();
  })
  .catch(err => {
    console.error("Failed to connect to Postgres (test connection):", err);
  });
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://frontend:5173'
  ],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', require('./routes/userRoutes')); // Importing user routes
app.get('/api/', (req, res) => {
    res.send("Hello World!")
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});