
const IncryptPassword = require('../helpers/authHelper');
const usermodel = require('../models/authModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const registerController = async (req, res) => {
    try {
        let { name, email, contact, password, cpassword } = req.body;
        if (!name || !email || !contact || !password || !cpassword) {
            res.status(401).send('fill all the details')
        }
        if (password !== cpassword) {
            res.status(400).send('password and confirm password does not match')
        } else {
            let existingUser = await usermodel.find({ email })
            if (existingUser.length > 0) {
                res.status(400).send('user already exist')
            }

            let hashpass = await IncryptPassword(password)
            let user = await new usermodel({
                name,
                email,
                contact,
                password: hashpass
            })
            await user.save()
            res.status(200).json({
                message: 'user registered',
                user
            })

        }

    } catch (error) {
        console.log(error)
        res.status(403).send('something went wrong')
    }
}

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
                res.status(200).json({token:token})
            }
        }

    } catch (error) {
        console.log(error)
        res.status(400).send('something went wrong')
    }

}

module.exports = { registerController, loginController, adminRegisterController }