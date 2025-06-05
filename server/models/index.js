const { Sequelize , DataTypes } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        host: process.env.POSTGRES_HOST,
        dialect: 'postgres',
        logging: false,
    }
);

sequelize.authenticate()
    .then(() => {
        console.log('Postgres Connection Successful');
    })
    .catch(err => {
        console.log('Error: Could not connect to Postgres', err);
    });


const db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require('./userModel')(sequelize, DataTypes);

module.exports = db;