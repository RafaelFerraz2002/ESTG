const PlayersService = require('../controllers/PlayersController')
const Player = require('../models/Player')

const service = PlayersService(Player)

module.exports = service