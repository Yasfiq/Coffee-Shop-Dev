const { Client } = require('pg')
const db = new Client({
    user: 'postgres',
    password: 'ysq91185933.',
    database: 'Coffee Shop',
    host: 'localhost',
    port: 5432
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