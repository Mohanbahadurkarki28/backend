const{Schema, model} =require('mongoose')
const{stringRequired, boolTrue, numberRequired, relatedRequired, modelConfig} = require('@/lib/constant')

const Product = model('Product', new Schema ({
    name: stringRequired,
    description: stringRequired,
    summary: stringRequired,
    price: numberRequired,
    discountedPrice: {
        type: Number,
        default: 0,
    },
    images:[stringRequired],
    catagoryId: {
        ...relatedRequired,
        ref: 'Category',
    },
    brandId: {
        ...relatedRequired,
        ref: 'Brand',
    },
    status: boolTrue,
    featured: {
        type: Boolean,
        default: false,
    }


}, modelConfig))

module.exports = Product