const express = require('express');

const router = express.Router();
const productController = require('../controllers/product.controller');
const verifyAdmin = require('../middlewares/verifyAdmin');
const verifyToken = require('../middlewares/verifyToken');

router.get('/products', verifyToken, productController.getAllProducts);
// router.get('/:id', productController.getProductById);
router.post('/create', [verifyToken, verifyAdmin], productController.createProduct);
router.put('/:id', [verifyToken, verifyAdmin], productController.updateProduct);
router.delete('/:id', [verifyToken, verifyAdmin], productController.deleteProduct);

module.exports = router;
