const{Schema, model} =require('mongoose')
const{modelConfig, numberRequired, relatedRequired} = require('@/lib/constant')

const Detail = model('Detail', new Schema ({
    qty: numberRequired,
    price: numberRequired,
    total: numberRequired,    
    OrderId: {
        ...relatedRequired,
        ref: 'Order',
    },
    productId: {
        ...relatedRequired,
        ref: 'Product',
    },

}, modelConfig))

module.exports = Detail