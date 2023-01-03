// Imports
const express = require('express') // Express Js
const app = express() // Express Js
require('dotenv').config() // dotenv package
const { urlencoded, json } = require('express') // Middleware urlencoded,json
app.use(urlencoded({ extended: false })) // Middleware urlencoded
app.use(json()) // Middleware json
const router = require(`./src/${process.env.api_version}/routes/route`) // route home
const cors = require('cors') // cors

app.use(cors({
    origin: process.env.cors_access
}))

// Route prefix root
app.use(`/api/${process.env.api_version}`, router)

// Error Handling 404:Page not found
app.use('/', (req, res) => {
    return res.status(404).send({
        Status: 404,
        Message: 'Page not found!'
    })
})

// Listening on port
app.listen(process.env.PORT, () => {
    console.log(`Success Listening on http://localhost:${process.env.PORT}`);
})