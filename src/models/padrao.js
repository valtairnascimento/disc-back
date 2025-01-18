const mongoose = require("mongoose");

const padraoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  resultado: {
    D: Number,
    I: Number,
    S: Number,
    C: Number,
  },
});

const Padrao = mongoose.model("Padrao", padraoSchema);

module.exports = Padrao;
