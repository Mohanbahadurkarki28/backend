const{Schema, model} =require('mongoose')
const{stringRequired, boolTrue, modelConfig} = require('@/lib/constant')
const Category = model('Category', new Schema({
    name: stringRequired,
    status: boolTrue,
    
}, modelConfig))

module.exports = Category