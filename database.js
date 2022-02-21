// Using Postgre SQL
const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "Uzi123123",
    host: "localhost",
    port: 5432,
    database: "pmanager_pern"
});

module.exports = pool;

