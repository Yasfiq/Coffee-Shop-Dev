// Imports
const express = require('express')
const router = express()
const productsController = require('../controller/controller.products')

// Endpoint
router.get('/', productsController.get)
router.post('/', productsController.add)
router.patch('/:id', productsController.edit)
router.delete('/:id', productsController.remove)

// Exports
module.exports = router