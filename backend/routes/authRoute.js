const express = require('express')
const {registerController,loginController, adminRegisterController, privateRoute}=require('../controllers/authController')
const router = express.Router()
const isUser = require('../middlewares/ifUser')
const isAdmin = require('../middlewares/ifAdmin')


router.post('/register',registerController)
router.post('/login',loginController)
router.post('/adminregister',adminRegisterController)
router.get('/user-auth',isUser,privateRoute)


module.exports = router;