// Imports
const express = require('express')
const router = express()
const productsController = require('../controller/controller.products')

// Endpoint
router.get('/', productsController.get)
router.post('/', productsController.add)
router.patch('/:id', productsController.edit)
router.delete('/:id', productsController.remove)

// Error Handling 400:ID not found
router.use(`/:id`, (req, res) => {
    return res.status(400).send({
        Status: 400,
        Message: 'ID not found!'
    })
})

// Exports
module.exports = router