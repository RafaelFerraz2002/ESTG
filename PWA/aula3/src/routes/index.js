const express = require('express')
let PlayerService = require('../services/player')

let router = express()

router.use('/team', PlayerService)

module.exports = router