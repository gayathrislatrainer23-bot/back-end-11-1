const express = require('express')
const router=  express.Router()
const userController = require('../controllers/userController')


router.get('/get_user', userController.getUser)
router.post('/create_user', userController.createUser)
// router.get('/get_user', (req,res)=>{})

module.exports = router;