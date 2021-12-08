const bodyParser = require('body-parser');
const express = require('express');

function PlayerRouter(){
    let router = express();

    router.use(bodyParser.json({limit:'100mb'}));
    router.use(bodyParser.urlencoded({limit:'100mb', extended: true}));

    router.route('/players')
    .get(function (req, res){
        console.log('get');
        res.send('get');
    })
    .post(function (req, res){
        console.log('post');
        res.send('post');
    });
    
router.route('/team')
    .put(function (req, res){
        console.log('put');
        res.send('put');
    });
    
    return router;
}

module.exports = PlayerRouter;

