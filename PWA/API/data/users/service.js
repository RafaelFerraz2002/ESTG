const jwt = require('jsonwebtoken')
const config = require('../../config')
const bcrypt = require('bcrypt')

function UserService(UserModel) {
    let service = {
        create,
        createToken,
        verifyToken,
        findUser,
        createPassword,
        comparePassword,
    }

    function create(user) {
        return createPassword(user)
            .then((hashPassword, err) => {
                if (err) {
                    return Promise.reject('Not saved')
                }

                let newUserWithPassword = {
                    ...user,
                    password: hashPassword,
                }

                let newUser = UserModel(newUserWithPassword)
                return save(newUser)
            })
    }

    function save(model) {
        return new Promise(function (resolve, reject) {
            model.save(function (err) {
                console.log(err)
                if (err) reject('There is a problem with register')
                resolve('Player created!')
            })
        })
    }

    function createToken(user) {
        let token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: config.expiresPassword
        })
        return { auth: true, token }
    }

    function verifyToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, config.secret, (err, decoded) => {
                if (err) {
                    reject()
                }
                return resolve(decoded)
            })
        })
    }

    function findUser({ name, password }) {
        return new Promise(function (resolve, reject) {
            UserModel.findOne({ name }, function (err, user) {
                if (err) reject(err)

                if (!user) {
                    reject('This data is wrong')
                }
                resolve(user)
            })
        })
            .then((user) => {
                return comparePassword(password, user.password)
                    .then((match) => {
                        if (!match) return Promise.reject('User not valid')

                        return Promise.resolve(user)
                    })
            })
    }

    function createPassword(user) {
        return bcrypt.hash(user.password, config.saltRounds)

    }

    function comparePassword(password, hash) {
        return bcrypt.compare(password, hash)
    }

    return service

}

module.exports = UserService