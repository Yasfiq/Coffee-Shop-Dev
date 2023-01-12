// Imports
const express = require('express') // Express Js
const router = express() // Express Js
const productsRoute = require('./route.products') // Product Route
const authRoute = require('./route.auth') // Auth route


// Routing products
router.use('/products', productsRoute)
// Routing Auth
router.use('/auth', authRoute)


// Home route
router.get('/', (req, res) => {
    return res.status(200).send({
        Status: 200,
        Message: "Welcome to Homepage"
    })
})


// Exports
module.exports = router