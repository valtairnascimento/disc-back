const { Router } = require("express");
const router = Router();
const {
  atualizarPadrao,
  buscarPadraoPorId,
  criarPadrao,
  deletarPadrao,
  listarPadroes,
} = require("../controllers/padraoController.js");

router.get("/", listarPadroes);
router.post("/", criarPadrao);

router.get("/:id", buscarPadraoPorId);

router.put("/:id", atualizarPadrao);

router.delete("/:id", deletarPadrao);

module.exports = router;
