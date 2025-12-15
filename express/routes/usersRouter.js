const express = require('express')
const router=  express.Router()
const userController = require('../controllers/userController')


router.get('/get_user', userController.getUser)
// router.get('/get_user', (req,res)=>{})

module.exports = router;