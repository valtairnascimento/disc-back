const express = require("express");
const rotaPersonalidade = require("./routes/personalidadeRoutes");
const rotaPadrao = require("./routes/padraoRoutes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/personalidade", rotaPersonalidade);
app.use("/padrao", rotaPadrao);

module.exports = app;
