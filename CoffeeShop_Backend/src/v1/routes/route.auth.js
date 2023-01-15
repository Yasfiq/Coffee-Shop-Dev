// Imports
const express = require('express') // Express Js
const router = express() // Express Js
const authController = require('../controller/controller.auth') // Auth Controller
const { validatorRegister } = require('../helper/validator')


// Endpoint
router.post('/login', authController.login)
router.post('/register', validatorRegister, authController.register)


// Export
module.exports = router