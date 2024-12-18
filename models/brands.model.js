const{Schema, model} =require('mongoose')
const{stringRequired, boolTrue, modelConfig} = require('@/lib/constant')

const Brand = model('Brand', new Schema({
    name: stringRequired,
    status: boolTrue,
    
}, modelConfig))

module.exports = Brand