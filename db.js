const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "users",
    password: "0321",
    port: 2000,
});

module.exports = pool;
