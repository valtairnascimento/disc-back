const mongoose = require("mongoose");

async function startDB() {
  await mongoose
    .connect(String(process.env.MONGO_URI))
    .then(() => console.log("Conectado ao MongoDB!"))
    .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));
}

module.exports = startDB;
