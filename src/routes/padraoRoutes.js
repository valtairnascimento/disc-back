const { Router } = require("express");
const router = Router();
const padraoControlador = require("../controllers/padraoController.js");

router.get("/padroes", padraoControlador.listarPadroes);
router.post("/padroes", padraoControlador.criarPadrao);

router.get("/padroes/:id", padraoControlador.buscarPadraoPorId);

router.put("/padroes/:id", padraoControlador.atualizarPadrao);

router.delete("/padroes/:id", padraoControlador.deletarPadrao);

module.exports = router;
