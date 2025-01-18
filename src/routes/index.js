const { Router } = require("express");
const router = Router();

// Importando as rotas
const personalidadeRoutes = require("./personalidadeRoutes.js");
const padraoRoutes = require("./padraoRoutes.js");

// Definindo as rotas
router.use("/personalidades", personalidadeRoutes); // todas as rotas de personalidade começam com '/personalidades'
router.use("/padrao", padraoRoutes); // todas as rotas padrão começam com '/api'

module.exports = router; // **Corrigir isso aqui, deve ser 'router'**
