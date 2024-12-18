const{types, Types} = require("mongoose")

const stringRequired ={
    type: String,
    require: true,
}
const boolTrue ={
    type: Boolean,
    default: true,

}
const modelConfig ={
    timestamps: true,
    autoIndex: true,
    autoCreate: true,
}

const numberRequired ={
        type: Number,
        required: true,
    }

const relatedRequired = {
    type: Types.ObjectId,
    require: true,
}

module.exports = {stringRequired, boolTrue, modelConfig, numberRequired, relatedRequired}