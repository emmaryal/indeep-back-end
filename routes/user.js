const express = require('express')

const router = express.Router()


//middlewares
const { authCheck} = require("../middlewares/auth");

//controllers

const {userCart, getUserCart, emptyUserCart, saveAddress, createOrder, orders, addToWishlist, wishlist, removeFromWishlist} = require('./../controllers/user');


router.post('/user/cart', authCheck, userCart); //save Cart
router.get ('/user/cart', authCheck, getUserCart); //get cart
router.delete('/user/cart', authCheck, emptyUserCart)
router.post('/user/address', authCheck, saveAddress)

router.post('/user/order', authCheck, createOrder)
router.get('/user/orders', authCheck, orders)

//wishlist
router.post('/user/wishlist', authCheck, addToWishlist)
router.get('/user/wishlist', authCheck, wishlist)
router.put('/user/wishlist/:productId', authCheck, removeFromWishlist)


// router.get('/user', (req, res)  => {
//     //express app is a request response handler
//     res.json({
//         data: 'hey you hit user API end point',
//     });
// });

module.exports = router