let mongoose = require('mongoose')
let Schema = mongoose.Schema

let UserSchema = new Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String , required: true }
})

let User = mongoose.model('Utilizadores', UserSchema)

module.exports = User