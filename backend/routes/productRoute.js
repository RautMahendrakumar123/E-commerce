const express = require('express');
const { addProduct, getProducts, getProduct, updateProduct, deleteProduct, getProductByCategory, getSpecialProduct } = require('../controllers/productController');
// const isUser = require('../middlewares/ifUser');
const router = express.Router();




router.get('/products',getProducts);
router.get('/product/:id',getProduct);
router.get('/products/:category',getProductByCategory);
router.get('/products/special/true',getSpecialProduct);
router.post('/upload',addProduct);
router.put('/product/:id',updateProduct);
router.delete('/product/:id',deleteProduct);

module.exports = router;