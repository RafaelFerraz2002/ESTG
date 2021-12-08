const express = require('express');
const routes = express.Router();

    routes.get('/tempohoje', (req, res) => {
        res.send({
            "Dia 27 de Outubro":"solinho"
        })
    });

module.exports = routes;

