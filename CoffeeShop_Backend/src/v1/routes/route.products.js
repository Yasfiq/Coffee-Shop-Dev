// Imports
const express = require('express') // Express Js
const router = express() // Express Js
const productsController = require('../controller/controller.products') // Products Controller
const productImageController = require('../controller/controller.image')
const verifyToken = require('../helper/verifyToken') // Token verifying
const {upload, uploadSingle } = require('../helper/upload.image') // Upload Image


// Endpoint Product
router.get('/', productsController.get)
router.get('/:id', productsController.getById)
router.post('/', verifyToken, upload, productsController.add)
router.patch('/:id', verifyToken, upload, productsController.edit)
router.delete('/:id', verifyToken, productsController.remove)

// Endpoint Images
router.get('/image/:id', productImageController.getById)
router.post('/image/:id', uploadSingle, productImageController.add)
router.patch('/image/:id', uploadSingle, productImageController.edit)
router.delete('/image/:id', productImageController.remove)


// Exports
module.exports = router