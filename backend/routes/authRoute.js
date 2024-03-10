const express = require('express')
const {registerController,loginController, adminRegisterController, privateRoute, getUsersController, deleteUserController}=require('../controllers/authController')
const router = express.Router()
const isUser = require('../middlewares/ifUser')
const isAdmin = require('../middlewares/ifAdmin')


router.post('/register',registerController)
router.post('/login',loginController)
router.post('/adminregister',adminRegisterController)
router.get('/user-auth',isUser,privateRoute)
router.get('/getusers',getUsersController)
router.delete('/deleteuser/:userId',deleteUserController)


module.exports = router;