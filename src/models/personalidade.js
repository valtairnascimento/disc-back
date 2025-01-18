const mongoose = require("mongoose");

const personalidadeSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  graficos: {
    D: Number,
    I: Number,
    S: Number,
    C: Number,
  },
  outrasInformacoes: {
    type: String,
    required: true,
  },
});

const Personalidade = mongoose.model("Personalidade", personalidadeSchema);

module.exports = Personalidade;
