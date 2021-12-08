const PlayerModel = require('../models/Player')

function PlayerService(PlayerModel) {
  let service = {
    create,
    findAll
  }

  function create(values) {
    let newPlayer = PlayerModel(values)
    return save(newPlayer)
  }

  function findAll() {
    return new Promise(function (resolve, reject) {
        PlayerModel.save(function (err){
            if (err) reject(err);

            resolve(users);
        });
    });
  }

  function save(newPlayer) {
    return new Promise((resolve, reject) => {
      newPlayer.save(err => {
        if (err) reject(err)

        resolve("Player created!")
      })
    })
  }

  return service
}

module.exports = PlayerService