const bodyParser = require("body-parser");
const express = require("express");

const clubRouter =  () => {
    let router = express();

    router.use(bodyParser.json({limit: '100mb'}));
    router.use(bodyParser.urlencoded({limit: '100mb', extended: true}));

    router.route('')
    .get((req, res) => res.send('Hello Members'))


    router.route('/Member')
    .get((req, res) => res.send('Hello Master'))

    return router;
}


module.exports = clubRouter;