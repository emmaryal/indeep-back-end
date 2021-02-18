const express = require('express')

const router = express.Router()


//middlewares
const { authCheck} = require("../middlewares/auth");

//controllers
const {userCart} = require('./../controllers/user');
const {getUserCart} = require('./../controllers/user');
const {emptyUserCart} = require('./../controllers/user');
const {saveAddress} = require('./../controllers/user');


router.post('/user/cart', authCheck, userCart); //save Cart
router.get ('/user/cart', authCheck, getUserCart); //get cart
router.delete('/user/cart', authCheck, emptyUserCart)
router.post('/user/address', authCheck, saveAddress)
// router.get('/user', (req, res)  => {
//     //express app is a request response handler
//     res.json({
//         data: 'hey you hit user API end point',
//     });
// });

module.exports = router