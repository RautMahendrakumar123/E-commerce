const express = require('express');
const { addProduct, getProducts, getProduct, updateProduct, deleteProduct, getProductByCategory, getSpecialProduct, getAllProducts } = require('../controllers/productController');
// const isUser = require('../middlewares/ifUser');
const router = express.Router();
const multerMiddleware = require('../middlewares/multer')




router.get('/products',getProducts);
router.get('/allProducts',getAllProducts)
router.get('/product/:id',getProduct);
router.get('/products/:category',getProductByCategory);
router.get('/products/special/true',getSpecialProduct);
router.post('/upload',multerMiddleware,addProduct);
router.put('/product/update/:id',multerMiddleware,updateProduct);
router.delete('/product/delete/:id',deleteProduct);

module.exports = router;