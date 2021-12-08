const http = require('http');
const express =  require('express');
const router = require('./router');
const mongoose = require('mongoose');
const config = require('./config');
var cors = require('cors');

mongoose.connect(config.db);

const hostname = '127.0.0.1';
const port = 3000;

var app = express();
app.use(cors());
app.use(router.init());

const server = http.Server(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});