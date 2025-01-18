const { Router } = require("express");
const router = Router();
const personalidadeControlador = require("../controllers/personalidadeController");

router.get("/personalidades", personalidadeControlador.listarPersonalidades);
router.post("/personalidades", personalidadeControlador.criarPersonalidade);
router.post(
  "/personalidades/resultados",
  personalidadeControlador.buscarResultado
);
router.put(
  "/personalidades/:id",
  personalidadeControlador.atualizarPersonalidade
);
router.delete(
  "/personalidades/:id",
  personalidadeControlador.deletarPersonalidade
);

module.exports = router;
