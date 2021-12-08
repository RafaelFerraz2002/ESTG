const http = require("http");
const express = require("express");
const config = require("./config");
var cors = require("cors");
const mongoose = require("mongoose");

const hostname = "127.0.0.1";
const port = 3333;
let router = require("./router");

var app = express();

app.use(cors());

const server = http.Server(app);
app.use(router.initialize());

server.listen(port, hostname, () => {
  console.log("Server running at: 127.0.0.1");
});

mongoose.connect(config.db);
