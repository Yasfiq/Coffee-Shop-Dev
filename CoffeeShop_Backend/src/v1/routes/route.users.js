// Imports
const express = require('express') // Express Js
const router = express() // Express Js
const verifyToken = require('../helper/verifyToken') // Token verifying
const {upload, uploadSingle } = require('../helper/upload.image') // Upload Image
const usersController = require('../controller/controller.users')


// Endpoint Users
router.get('/', usersController.get)
router.post('/', usersController.add)
// router.edit('')