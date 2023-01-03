// Imports
const { Client } = require('pg')
require('dotenv').config()

const db = new Client({
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database,
    host: process.env.db_host,
    port: process.env.db_port
})

db.connect(error => {
    if (error) {
        console.error('Failed to connect database!');
    } else {
        console.log('Connected to database!');
    }
})

// Exports
module.exports = db