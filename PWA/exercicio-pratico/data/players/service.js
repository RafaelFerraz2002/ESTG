//const { Promise } = require("mongoose");

function PlayerService(PlayerModel) {
  let service = {
    create,
    findAll,
    findById,
    update,
    removeById,
    findHobbiesById,
  };

  function update(id, values) {
    return new Promise(function (resolve, reject) {
      PlayerModel.findByIdAndUpdate(id, values, function (err, user) {
        if (err) reject(err);
        resolve(user);
      });
    });
  }

  function removeById(id) {
    return new Promise(function (resolve, reject) {
      console.log(id);
      PlayerModel.findByIdAndRemove(id, function (err) {
        console.log(err);

        if (err) reject(err);
        resolve();
      });
    });
  }

  function findById(id) {
    return new Promise(function (resolve, reject) {
      PlayerModel.findById(id, function (err, user) {
        if (err) reject(err);
        resolve(user);
      });
    });
  }

  function create(values) {
    let newPlayer = PlayerModel(values);
    return save(newPlayer);
  }

  function save(newPlayer) {
    return new Promise(function (resolve, reject) {
      //fazer algo, possivelmente assíncrono, então...
      newPlayer.save(function (err) {
        if (err) reject(err);

        resolve("Player Created!");
      });
    });
  }

  function findAll() {
    return new Promise(function (resolve, reject) {
      PlayerModel.find({}, function (err, users) {
        if (err) reject(err);
        resolve(users);
      });
    });
  }

  function findHobbiesById(id) {
    return new Promise(function (resolve, reject) {
      
      PlayerModel.findById(id, function (err, user) {
        if (err) reject(err);
        resolve(user);
      }).select({'hobbies':1, '_id':0});
    });
  }

  return service;
}

module.exports = PlayerService;
