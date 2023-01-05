/* eslint-disable no-undef */
// Imports
// eslint-disable-next-line no-undef
const express = require('express')
const router = express()
const productsController = require('../controller/controller.products')
const multer = require('multer') // multer

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '_' + Data.now() + '_' + file.originalname)
    }
})

// eslint-disable-next-line no-unused-vars
const upload = multer({
    storage: storage
})

// Endpoint
router.get('/', productsController.get)
router.get('/:id', productsController.getById)
router.post('/', /* upload.single('productimage'),*/ productsController.add)
router.patch('/:id', /* upload.single('productimage'),*/ productsController.edit)
router.delete('/:id', productsController.remove)

// Error Handling 400:ID not found
router.use(`/*`, (req, res) => {
    return res.status(400).send({
        Status: 400,
        Message: 'ID not found!'
    })
})

// Exports
// eslint-disable-next-line no-undef
module.exports = router