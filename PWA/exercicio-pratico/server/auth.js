const bodyParser = require('body-parser');
const express = require('express');
const Users = require('../data/users')

function AuthRouter() {
  let router = express(); 

  router.use(bodyParser.json({ limit: '100mb' }));
  router.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

  router.route('/register')
    .post(function (req, res, next) {
      console.log('Register');
      const body = req.body;

      Users.create(body)
        .then((user)=> Users.createToken(user))
        .then((response) => {
          res.status(200);
          res.send(response);
        })
        .catch((err) => {
          res.status(500);
          res.send(err);
          next();
        });
    });

    router.route('/login')
      .post(function(req, res, next)  {
        let body = req.body;

        return Users.findUser(body)
          .then((user) => {
            return Users.createToken(user);
          })
          .then((response) => {
            res.status(200);
            res.send(response);
          })
          .catch((err) => {
            res.status(500);
            res.send(err);
            next();
          });
      });


    router.route('/me')
        .get(function(req, res, next)  {
          let token = req.headers['x-access-token'];

          if(!token) {
            return res.status(401).send({ auth:false, message: 'No token provided.'})
          }

          return Users.verifyToken(token)
            .then((decoded) => {
              res.status(202).send({ auth:true, decoded });
            })
            .catch((err) => {
              res.status(500);
              res.send(err);
              next();
            });
        });
        

  return router;
}

module.exports = AuthRouter;