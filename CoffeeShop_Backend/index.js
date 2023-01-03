// Imports
const express = require('express') // Express Js
const app = express() // Express Js
const port = 3000 // Port
const { urlencoded, json } = require('express') // Middleware urlencoded,json
app.use(urlencoded({ extended: false })) // Middleware urlencoded
app.use(json()) // Middleware json
const router = require('./src/v1/routes/route')

// Route prefix root
app.use('/api/v1', router)

// Error Handling 404:Page not found
app.use('/', (req, res) => {
    return res.status(404).send({
        Status: 404,
        Message: 'Page not found!',
        Homepage: 'http://localhost:3000/api/v1'
    })
})

// Listening on port
app.listen(port, () => {
    console.log("Success Listening on http://localhost:3000");
})