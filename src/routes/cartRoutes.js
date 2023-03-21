const express = require('express');
const router = express.Router();
const cartController = requiere('../controller/cartController');

router.get('/', auth, cartController.showCart);
router.post('/addToCart', auth, cartController.addToCart);
router.delete('/deleteCartItem', auth, cartController.deleteCartItem);
router.post('/purchase', auth, cartController.purchase);
router.get('/cartsHistory', auth, cartController.cartsHistory);

module.exports = router;