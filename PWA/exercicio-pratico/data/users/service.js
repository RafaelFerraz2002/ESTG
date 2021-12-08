const jwt = require("jsonwebtoken");
const config = require("../../config");

function UserService(UserModel) {
    let service = {
      create,
      findUser,
      createToken,
      verifyToken
    };
  
    function create(values) {
      let newUser = UserModel(values);
      return save(newUser);
    }

    function createToken(user) {
      let token = jwt.sign({ id: user._id}, config.secret, {
        expiresIn: config.expiresPassword
      });

      return {auth: true, token}
    }

    function verifyToken(token) {
      return new Promise((resolve, reject) => {
        jwt.verify(token, config.secret, (err, decoded) => {
          if(err) {
            reject();
          }

          return resolve(decoded);
        })
      })
    }
   
    function save(model) {
      return new Promise(function (resolve, reject) {
        // do a thing, possibly async, then…
        model.save(function (err) {
          console.log(err);
          if (err) reject("There is a problema with register");
  
          resolve('Player created!');
        });
      });
    }


    function findUser({ name, password }) {
      return new Promise(function (resolve, reject) {
        UserModel.findOne({ name, password }, function (err, user) {
          if (err) reject(err);
          // object of all the users

          if(!user){
            reject("This data is wrong");
          }

          resolve(user);
        });
      });
    }
  
  
    return service;
  }
  
  module.exports = UserService;