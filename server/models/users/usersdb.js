/**** LIBRARY OF QUERIES FOR THE USERTABLE DATABASE ****/

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
});

async function findUserByUsername(username) {
  const res = await pool.query('SELECT * FROM usertable WHERE username = $1', [username]);
  return res.rows[0];
}

async function findUserByEmail(email) {
  const res = await pool.query('SELECT * FROM usertable WHERE email = $1', [email]);
  return res.rows[0];
}

async function createUser({ username, email, password }) {
  const res = await pool.query(
    `INSERT INTO usertable (username, email, password) VALUES ($1, $2, $3) RETURNING *`,
    [username, email, password]
  );
  return res.rows[0];
}

async function getUserForLogin(username) {
  const res = await pool.query('SELECT * FROM usertable WHERE username = $1', [username]);
  return res.rows[0];
}

module.exports = {
  findUserByUsername,
  findUserByEmail,
  createUser,
  getUserForLogin,
};