const{Schema, model} =require('mongoose')
const{stringRequired, modelConfig, numberRequired, relatedRequired} = require('@/lib/constant')

const Review = model('Review', new Schema ({
    comment: stringRequired,
    rating: numberRequired,
    
    userId: {
        ...relatedRequired,
        ref: 'User',
    },
    productId: {
        ...relatedRequired,
        ref: 'Product',
    },

}, modelConfig))

module.exports = Review