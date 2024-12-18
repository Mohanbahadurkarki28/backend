const{Schema, model} =require('mongoose')
const{modelConfig, relatedRequired} = require('@/lib/constant')

const Order = model('Order', new Schema ({
    
    userId: {
        ...relatedRequired,
        ref: 'User',
    },
    status:{
        type: String,
        enum:['Processing', 'Confirmed', 'Shipping','Delivered', 'Cancelled'],
        default: 'processing',
    }

}, modelConfig))

module.exports = Order