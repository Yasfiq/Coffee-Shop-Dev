/* eslint-disable no-undef */
// Imports
const express = require('express') // Express Js
const app = express() // Express Js
require('dotenv').config() // dotenv package
const { urlencoded, json } = require('express') // Middleware urlencoded,json
app.use(urlencoded({ extended: false })) // Middleware urlencoded
app.use(json()) // Middleware json
const router = require(`./src/${process.env.api_version}/routes/route`) // route home
const cors = require('cors') // cors
app.use(express.static('public')) // Middleware static folder
const { PORT, CORS_ACCESS, API_VERSION } = process.env // Enviroment Variable


app.use(cors({
    origin: CORS_ACCESS
}))

// Route prefix root
app.use(`/api/${API_VERSION}`, router)

// Error Handling 404:Page not found
app.use('/*', (req, res) => {
    return res.status(404).send({
        Status: 404,
        Message: 'Page not found!'
    })
})

// Listening on port
app.listen(PORT, () => {
    console.log(`Success Listening on http://localhost:${PORT}`);
})