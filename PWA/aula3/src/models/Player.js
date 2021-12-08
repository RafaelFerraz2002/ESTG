let mongoose = require('mongoose')
let Schema = mongoose.Schema

// Create schema
let PlayerSchema = new Schema({
  name: { type: String, required: true, unique: true },
  lastName: { type: String, required: true }
})

let Player = mongoose.model('User', PlayerSchema)

module.exports = Player