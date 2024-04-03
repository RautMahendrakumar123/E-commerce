const express = require('express');
const router = express.Router();
const {registerController,loginController, adminRegisterController, privateRoute, getUsersController, deleteUserController, getUsersByIdController}=require('../controllers/authController')
const isUser = require('../middlewares/ifUser');
const isAdmin = require('../middlewares/ifAdmin');
const multerMiddleware = require('../middlewares/multer');


router.post('/register',multerMiddleware,registerController)

router.post('/adminregister',multerMiddleware,adminRegisterController)

router.post('/login',loginController)

router.get('/user-auth',isAdmin,privateRoute)

router.get('/getusers',getUsersController)

router.get('/getuser/:id',getUsersByIdController)

router.delete('/deleteuser/:userId',deleteUserController)


module.exports = router;