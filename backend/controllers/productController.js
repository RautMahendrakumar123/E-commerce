const productModel = require("../models/productModel");
const upload = require('../middlewares/multer')


const addProduct = async (req, res) => {
    try {
        upload.single('image')(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json({ message: 'Error uploading image' });
            } else if (err) {
                return res.status(500).json({ message: 'Unknown error uploading image' });
            }

            const { productname, desc, price, category, special } = req.body;

            if (!productname || !req.file || !desc || !price || !category) {
                return res.status(400).send('Fill in all the details, including the image');
            }

            const Product = await new productModel({
                productname,
                image: req.file.filename,
                desc,
                price,
                category,
                special
            });

            await Product.save();
            res.status(200).send('Product created successfully');
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getProducts = async(req,res)=>{
    try {
        const products = await productModel.find();
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

const getProductByCategory = async(req,res)=>{
    try {
        const category = req.params.category;
        const products = await productModel.find({category});
        if(products.length===0){
            return res.status(404).json({message:'no prouct found for this category'})
        }
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

const getProduct = async(req,res)=>{
    try {
        
        const product = await productModel.findById(req.params.id);
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

const getSpecialProduct = async(req,res)=>{
    try {
        const specialproduct = await productModel.find({special:true});
        if(specialproduct.length===0){
            return res.status(404).json({message:'products not found'});
        }
        res.json(specialproduct)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

const updateProduct = async(req,res)=>{
    try {
        const {productname,image,desc,price,category,special} = req.body;
        const updatedproduct = await productModel.findByIdAndUpdate(req.params.id,
            {productname,image,desc,price,category,special},
            {new:true})
            if(!updatedproduct){
                return res.status(404).json({message:'product not found'})
            }
            res.json(updatedproduct)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

const deleteProduct = async(req,res)=>{
    try {
        const deletedproduct = await productModel.findByIdAndDelete(req.params.id);
        if(!deletedproduct){
            return res.status(404).json({message:'product not found'})
        }
        res.json({message:'product deleted successfully'})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Server Error'})
    }
}


module.exports = { addProduct, getProducts, getProduct, updateProduct,deleteProduct, getProductByCategory, getSpecialProduct}