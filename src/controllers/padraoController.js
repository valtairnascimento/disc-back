const Padrao = require("../models/padrao");

// Listar todos os padrões
exports.listarPadroes = async (req, res) => {
  try {
    const padroes = await Padrao.find();
    res.status(200).json(padroes);
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao listar padrões.", erro: error.message });
  }
};

// Criar um novo padrão
exports.criarPadrao = async (req, res) => {
  try {
    const novoPadrao = new Padrao(req.body);
    const padraoSalvo = await novoPadrao.save();
    res.status(201).json(padraoSalvo);
  } catch (error) {
    res
      .status(400)
      .json({ mensagem: "Erro ao criar padrão.", erro: error.message });
  }
};

// Buscar um padrão por ID
exports.buscarPadraoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const padrao = await Padrao.findById(id);
    if (!padrao) {
      return res.status(404).json({ mensagem: "Padrão não encontrado." });
    }
    res.status(200).json(padrao);
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao buscar padrão.", erro: error.message });
  }
};

// Atualizar um padrão existente
exports.atualizarPadrao = async (req, res) => {
  const { id } = req.params;
  try {
    const padraoAtualizado = await Padrao.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!padraoAtualizado) {
      return res.status(404).json({ mensagem: "Padrão não encontrado." });
    }
    res.status(200).json(padraoAtualizado);
  } catch (error) {
    res
      .status(400)
      .json({ mensagem: "Erro ao atualizar padrão.", erro: error.message });
  }
};

// Deletar um padrão
exports.deletarPadrao = async (req, res) => {
  const { id } = req.params;
  try {
    const padraoDeletado = await Padrao.findByIdAndDelete(id);
    if (!padraoDeletado) {
      return res.status(404).json({ mensagem: "Padrão não encontrado." });
    }
    res.status(204).send();
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao deletar padrão.", erro: error.message });
  }
};
