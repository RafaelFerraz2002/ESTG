let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Hobbies=new Schema({
    name: {type:String, required:true}
});

//criar o schema

let PlayerSchema = new Schema({
    name:{type: String, required:true, unique:true},
    lastName:{type: String, required:true},
    hobbies:[{type: Hobbies}],
    age:{type: Number},
});

//o schema é inútil até aqui...
//é necessário criar um modelo para usá-lo

let Player = mongoose.model('utilizadores', PlayerSchema);

module.exports=Player;