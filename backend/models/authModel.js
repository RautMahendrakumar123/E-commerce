const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:Number,
        default:0
    },
    image:{
        type:String
    }
})

const userModel = new mongoose.model('User',userSchema)
module.exports = userModel;