const express = require('express')
const {registerController,loginController, adminRegisterController}=require('../controllers/authController')
const router = express.Router()


router.post('/register',registerController)
router.post('/login',loginController)
router.post('/adminregister',adminRegisterController)


module.exports = router;