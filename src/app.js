const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Usando as rotas definidas no index.js
app.use(routes);

module.exports = app;
