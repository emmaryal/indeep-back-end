const mongoose= require('mongoose')
const {ObjectId} = mongoose.Schema
const cartSchema = new mongoose.Schema({
    products: [
        {
            product: {
                type: ObjectId,
                ref: 'Product'
            },
            count: Number,
            price: Number
        }
    ],
    cartTotal: Number,
    totalAfterDiscount: Number,
    orderedBy: {type: ObjectId, ref: 'User'}
}, {timestaps: true})

module.exports = mongoose.model('Cart', cartSchema)