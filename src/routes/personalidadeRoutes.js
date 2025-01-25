const { Router } = require("express");

const router = Router();

const {
  atualizarPersonalidade,
  buscarResultado,
  criarPersonalidade,
  deletarPersonalidade,
  listarPersonalidades,
} = require("../controllers/personalidadeController");

router.get("/", listarPersonalidades);
router.post("/", criarPersonalidade);
router.post("/resultados", buscarResultado);
router.put("/:id", atualizarPersonalidade);
router.delete("/:id", deletarPersonalidade);

module.exports = router;
