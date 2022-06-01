const {Schema, model, Types} = require('mongoose')

const schema = new Schema( {
    name: {
        type: String, required: true, unique: true
    },
    owner: {
        type: Types.ObjectId, ref: "User"
    }
})
module.exports = model('Watch', schema)