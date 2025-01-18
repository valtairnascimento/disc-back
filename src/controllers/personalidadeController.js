const Personalidade = require("../models/personalidade");

// Listar todas as personalidades
exports.listarPersonalidades = async (req, res) => {
  try {
    const personalidades = await Personalidade.find();
    res.status(200).json(personalidades);
  } catch (error) {
    res.status(500).json({
      mensagem: "Erro ao listar personalidades.",
      erro: error.message,
    });
  }
};

// Criar uma nova personalidade
exports.criarPersonalidade = async (req, res) => {
  try {
    const novaPersonalidade = new Personalidade(req.body);
    const personalidadeSalva = await novaPersonalidade.save();
    res.status(201).json(personalidadeSalva);
  } catch (error) {
    res
      .status(400)
      .json({ mensagem: "Erro ao criar personalidade.", erro: error.message });
  }
};

// Buscar resultado baseado em inputs (m e l)
exports.buscarResultado = async (req, res) => {
  const { m, l } = req.body;

  const most = m.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const least = l.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const resultado = {};
  ["D", "I", "S", "C"].forEach((aspect) => {
    resultado[aspect] = {
      most: most[aspect] || 0,
      least: least[aspect] || 0,
      change: (most[aspect] || 0) - (least[aspect] || 0),
    };
  });

  try {
    const padraoEncontrado = await Personalidade.findOne({
      "graficos.D": resultado.D.change,
      "graficos.I": resultado.I.change,
      "graficos.S": resultado.S.change,
      "graficos.C": resultado.C.change,
    });

    if (padraoEncontrado) {
      res.status(200).json({ resultado, padrao: padraoEncontrado });
    } else {
      res
        .status(404)
        .json({ mensagem: "Nenhum padrão correspondente foi encontrado." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao buscar resultados.", erro: error.message });
  }
};

// Atualizar uma personalidade existente
exports.atualizarPersonalidade = async (req, res) => {
  const { id } = req.params;
  try {
    const personalidadeAtualizada = await Personalidade.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!personalidadeAtualizada) {
      return res
        .status(404)
        .json({ mensagem: "Personalidade não encontrada." });
    }
    res.status(200).json(personalidadeAtualizada);
  } catch (error) {
    res.status(400).json({
      mensagem: "Erro ao atualizar personalidade.",
      erro: error.message,
    });
  }
};

// Deletar uma personalidade
exports.deletarPersonalidade = async (req, res) => {
  const { id } = req.params;
  try {
    const personalidadeDeletada = await Personalidade.findByIdAndDelete(id);
    if (!personalidadeDeletada) {
      return res
        .status(404)
        .json({ mensagem: "Personalidade não encontrada." });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      mensagem: "Erro ao deletar personalidade.",
      erro: error.message,
    });
  }
};
