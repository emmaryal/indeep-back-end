const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema

const orderSchema = new mongoose.Schema({

    products: [
        {
            product: {
                type: ObjectId,
                ref: 'Record'
            },
            count: Number
        }
    ],
    
        paymentIntent: {},
        orderStatus: {
            type: String,
            default: 'Not Processed',
            enum: [
                'Not Processed',
                'Processing',
                'Dispatched',
                'Cancelled',
                'Completed'
            ],

        },
        orderedBy: {type: ObjectId, ref: 'User'}

}, {timestamps: true})


module.exports = mongoose.model('Order', orderSchema)