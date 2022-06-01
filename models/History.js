const {Schema, model, Types} = require('mongoose')

const history = new Schema({
    rate: {
        type: String, unique: false, required: true
    },
    date: {
        type: String, unique: false, required: true
    },
    color:{
        type: String, unique: false, required: true
    },
    score: {
        type: Number,  unique: false, required: true
    },
    currency: {
        type: String,  unique: false, required: true
    },
    result:{
        type: Boolean,  unique: false, required: true
    },
    owner: {type: Types.ObjectId, ref: "User" }
})

module.exports = model("History", history)
