const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productname:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true,
    },
    category:{
       type:String,
       required:true
    },
    special:{
        type:Boolean,
        default:false
    }
})

const productModel = new mongoose.model('Product',productSchema)
module.exports = productModel;