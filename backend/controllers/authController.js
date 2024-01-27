
const IncryptPassword = require('../helpers/authHelper');
const usermodel = require('../models/authModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const upload = require('../middlewares/multer');
const multer = require('multer');

const registerController = async (req, res) => {
    try {
        upload.single('image')(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json({ message: 'Error uploading avatar' });
            } else if (err) {
                return res.status(500).json({ message: 'Unknown error uploading avatar' });
            }

            if (!req.file) {
                console.log('file problem')
                return res.status(400).json({ message: 'No file uploaded' });
            }

            const { name, email, contact, password, cpassword, image} = req.body;

            if (!name || !email || !contact || !password || !cpassword) {
                return res.status(401).send('Fill in all the details');
            }

            if (password !== cpassword) {
                return res.status(400).send('Password and confirm password do not match');
            }

            const existingUser = await usermodel.findOne({ email });

            if (existingUser) {
                return res.status(400).send('User already exists');
            }

            const hashpass = await IncryptPassword(password);

            const user = new usermodel({
                name,
                email,
                contact,
                password: hashpass,
                image: req.file ? req.file.filename : null,
            });

            await user.save();
            res.status(200).json({
                message: 'User registered',
                user
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
};

const adminRegisterController = async (req, res) => {
    try {
        const { name, email, contact, password, cpassword, question } = req.body;

        if (!name || !email || !contact || !password || !cpassword || !question) {
            return res.status(401).send('Fill in all the details');
        }

        if (question !== 'jaiShreeRam') {
            return res.status(400).send('Wrong key');
        }

        if (password !== cpassword) {
            return res.status(400).send('Password and confirm password do not match');
        }

        const existingUser = await usermodel.find({ email });
        if (existingUser.length > 0) {
            return res.status(400).send('User already exists');
        }

        const hashpass = await IncryptPassword(password);
        const user = new usermodel({
            name,
            email,
            contact,
            password: hashpass,
            role: 1,
        });

        await user.save();

        res.status(200).json({
            message: 'User registered',
            user,
        });
    } catch (error) {
        console.error(error);
        res.status(403).send('Something went wrong');
    }
};

const loginController = async (req, res) => {
    try {
        let { email, password } = req.body;
        if (!email || !password) {
            res.status(401).send('fill all the details')
        }
        let existingUser = await usermodel.findOne({ email })
        if (!existingUser) {
            res.status(401).send('user does not exist please register')
        } else {
            let matchPass = await bcrypt.compare(password, existingUser.password)
            if (!matchPass) {
                res.status(403).send('password does not match')
            } else {
                const token = jwt.sign({ userId: existingUser._id }, process.env.secretSTR)
                res.status(200).json({
                    user:{
                        name:existingUser.name,
                        email:existingUser.email,
                        contact:existingUser.contact,
                        image:existingUser.image,
                        id:existingUser._id
                    },
                    token
                })
            }
        }

    } catch (error) {
        console.log(error)
        res.status(400).send('something went wrong')
    }

}


const privateRoute = (req,res)=>{
    res.status(200).json({ok:true})
}

module.exports = { registerController, loginController, adminRegisterController, privateRoute }