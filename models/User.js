const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  name:{type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  role: { type: String, default: 'User' },
  score: { type: Number, default: 10000 },
  links: [{type: Types.ObjectId, ref: 'Watch'}],
  rates: [{type: Types.ObjectId, ref: 'Rate'}],
  history: [{type: Types.ObjectId, ref: 'History'}]

})
module.exports = model('User', schema)