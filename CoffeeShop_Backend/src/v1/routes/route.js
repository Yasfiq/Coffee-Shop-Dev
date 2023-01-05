/* eslint-disable no-undef */
// Imports
const express = require('express')
const router = express()
const productsRoute = require('./route.products')

// Route products
router.use('/products', productsRoute)

// Route home
router.get('/', (req, res) => {
    return res.status(200).send({
        Status: 200,
        Message: "Welcome to Homepage"
    })
})

// Exports
// eslint-disable-next-line no-undef
module.exports = router