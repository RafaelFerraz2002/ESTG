function PlayerService(PlayerModel) {
    let service = {
        create,
        findAll,
        findById,
        update,
        removeById,
        findByIdHobbies
    }


    function create(values) {
        let newPlayer = PlayerModel(values)
        return save(newPlayer)
    }

    function save(newPlayer) {
        return new Promise(function (resolve, reject) {
            newPlayer.save(function (err) {
                if (err) reject(err)
                resolve('Player created!')
            })
        })
    }

    function findAll() {
        return new Promise(function (resolve, reject) {
            PlayerModel.find({}, function (err, users) {
                if (err) reject(err)
                resolve(users)
            })
        })
    }

    function findById(id) {
        return new Promise(function (resolve, reject) {
            PlayerModel.findById(id, function (err, user) {
                if (err) reject(err)
                resolve(user)
            })
        })
    }

    function findByIdHobbies(id) {
        return new Promise(function (resolve, reject) {
            PlayerModel.findById(id, { hobbies: 1 }, function (err, user) {
                if (err) reject(err)
                resolve(user)
            })
        })
    }

    function update(id, values) {
        return new Promise(function (resolve, reject) {
            PlayerModel.findByIdAndUpdate(id, values, function (err, user) {
                if (err) reject(err)
                resolve(user)
            })
        })
    }

    function removeById(id) {
        return new Promise(function (resolve, reject) {
            console.log(id)
            PlayerModel.findByIdAndRemove(id, function (err) {
                console.log(err)
                if (err) reject(err)
                resolve()
            })
        })
    }

    return service
}

module.exports = PlayerService