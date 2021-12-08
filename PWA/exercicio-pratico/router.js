const express = require("express");
//const apis = require("./server/");
let PlayerAPI = require('./server/players');
let clubs = require('./server/clubs');
let AuthAPI = require('./server/auth');

function init () {
    let api = express();

    //const { players, clubs } = apis;

    api.use('/clubs', clubs());
    api.use('/team', PlayerAPI());
    api.use('/auth', AuthAPI());

    return api;
}

module.exports = {
    init: init,
}
