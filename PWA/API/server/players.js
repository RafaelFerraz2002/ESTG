const bodyParser = require("body-parser");
const express = require("express");
const Players = require("../data/Players");
const cors = require("cors");

function PlayerRouter() {
  let router = express();

  router.use(bodyParser.json({ limit: "100mb" }));
  router.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

  router.use(function (req, res, next) {
    next();
  });

  router
    .route("/players")
    .get(function (req, res, next) {
      console.log("get all Players");
      Players.findAll().then((players) => {
        res.send(players);
        next();
      });
    })
    .post(function (req, res, next) {
      console.log("post");
      let body = req.body;
      Players.create(body)
        .then(() => {
          console.log("gravei");
          res.status(200);
          res.send(body);
          next();
        })
        .catch((err) => {
          console.log("Já existe");
          err.status = err.status || 500;
          res.status(401);
          next();
        });
    });
  router.route("/team").put(function (req, res) {
    console.log("put");
    res.send("put");
  });

  router
    .route("/players/:playerId")
    .get(function (req, res, next) {
      console.log("get for one Id");
      let playerId = req.params.playerId;

      Players.findById(playerId)
        .then((player) => {
          res.status(200);
          res.send(player);
          next();
        })
        .catch((err) => {
          res.status(404);
          next();
        });
    })
    .put(function (req, res, next) {
      let playerId = req.params.playerId;
      let body = req.body;

      Players.update(playerId, body)
        .then((player) => {
          res.status(200);
          res.send(player);
          next();
        })
        .catch((err) => {
          res.status(404);
          next();
        });
    })
    .delete(function (req, res, next) {
      console.log("del for one Id");
      let playerId = req.params.playerId;
      Players.removeById(playerId)
        .then(() => {
          console.log("test");
          res.status(200).json();
          next();
        })
        .catch((err) => {
          console.log("err");
          res.status(404);
          next();
        });
    });

  router.route("/players/:playerId/hobbies").get(function (req, res, next) {
    console.log("get for one Id hobbies");
    let hobbies = req.params.playerId;

    Players.findByIdHobbies(hobbies)
      .then((player) => {
        res.status(200);
        res.send(player);
        next();
      })
      .catch((err) => {
        res.status(404);
        next();
      });
  });

  return router;
}

module.exports = PlayerRouter;
