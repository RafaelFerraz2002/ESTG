let mongoose = require('mongoose')
let Schema = mongoose.Schema

let Hobbies = new Schema({
    name: { type: String, required: true },
})

let PlayerSchema = new Schema({
    name: { type: String, required: true, unique: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    hobbies: [{ type: Hobbies }]
})

let Player = mongoose.model('User', PlayerSchema)

module.exports = Player