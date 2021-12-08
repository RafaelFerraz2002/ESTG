const bodyParser = require("body-parser");
const express = require("express");
//const controllersPlayers = require("../controllers/players");
const Players = require("../data/players");

const playerRouter = () => {
  let router = express();

  router.use(bodyParser.json({ limit: "100mb" }));
  router.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

  router.use(function (req, res, next) {
    console.log("Time: ", Date.now());
    next();
  });

  //router.route("/players");
  /*
    .get(controllersPlayers.getPlayers)
    .post(controllersPlayers.postPlayer)
    .put(controllersPlayers.putPlayer)
*/
  router
    .route("/players")

    .get(function (req, res, next) {
      console.log("get");
      //res.send("isto foi um get");

      Players.findAll()
        .then((players) => {
          res.send(players);
        })
        .catch((err) => {
          next();
        });
    })

    .post(function (req, res, next) {
      console.log("post");
      //res.send("isto foi um post");

      let body = req.body;
      Players.create(body)
        .then(() => {
          console.log("Gravei o Player");
          res.status(200);
          res.send(body);
          next();
        })

        .catch((err) => {
          console.log("Não gravado. Já existe!)");
          err.status = err.status || 500;
          res.status(401);
          next();
        });
    });

  router.route("/games").get(function (req, res) {
    console.log("Games");
    res.send("<h1>Games</h1>");
  });

  router.route("/team").put(function (req, res) {
    console.log("put");
    res.send("put");
  });

  router
    .route("/players/:playerId")
    .get(function (req, res, next) {
      console.log("get for one ID");
      let playerID = req.params.playerId;

      Players.findById(playerID)
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

      console.log(body);

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
    .delete(function(req, res, next){
      console.log('del for one ID');
      let playerId=req.params.playerId;
      Players.removeById(playerId)
      .then(()=>{
        console.log('deleted...');
        res.status(200).json();
        next();
      })
      .catch((err)=>{
        console.log(err);
        res.status(404);
      });
    });


    router
    .route("/players/:playerId/hobbies")
    .get(function (req, res, next) {
      console.log("get hoobies by ID");
      let playerID = req.params.playerId;

      Players.findHobbiesById(playerID)
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
};

module.exports = playerRouter;