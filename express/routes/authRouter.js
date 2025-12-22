const express = require('express')
const router=  express.Router()
const authController = require('../controllers/authController')

router.post('/userRegister',authController.UserRegister)

module.exports = router;