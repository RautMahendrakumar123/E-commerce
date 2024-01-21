const express = require('express');
const { addProduct, getProducts, getProduct, updateProduct, deleteProduct, getProductByCategory, getSpecialProduct } = require('../controllers/productController');
const router = express.Router();




router.get('/products',getProducts);
router.get('/products/:id',getProduct);
router.get('/products/:category',getProductByCategory);
router.get('/products/special-products',getSpecialProduct);
router.post('/product',addProduct);
router.put('/product/:id',updateProduct);
router.delete('/product/:id',deleteProduct);

module.exports = router;