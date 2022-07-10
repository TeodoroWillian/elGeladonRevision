const paletasService = require("../services/paleta.service");
const mongoose = require("mongoose");

const findAllPaletasController = async (req, res) => {
  const allPaletas = await paletasService.findAllPaletasService();
  if (allPaletas.length == 0) {
    return res.status(404).send({ message: "Não existe paleta cadastrada" });
  }
  res.send(allPaletas);
};

const findByIdPaletaController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "ID Inválido" });
  }
  const chosenPaleta = await paletasService.findByIdPaletaService(idParam);
  if (!chosenPaleta) {
    return res.status(404).send({ message: "Paleta Não Encontrada" });
  }
  res.send(chosenPaleta);
};

const createPaletaController = async (req, res) => {
  const paleta = req.body;

  if (
    !paleta ||
    !paleta.sabor ||
    !paleta.descricao ||
    !paleta.foto ||
    !paleta.preco
  ) {
    return res
      .status(400)
      .send({ message: "envie todos os campos da paleta!" });
  }
  const newPaleta = await paletasService.createPaletaService(paleta);
  res.status(201).send(newPaleta);
};

const updatePaletaController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "ID Inválido" });
  }

  const editPatleta = req.body;

  if (
    !editPatleta ||
    !editPatleta.sabor ||
    !editPatleta.descricao ||
    !editPatleta.foto ||
    !editPatleta.preco
  ) {
    return res
      .status(400)
      .send({ message: "envie todos os campos da paleta!" });
  }
  const updatedPaleta = await paletasService.updatePaletaService(
    idParam,
    editPatleta
  );
  res.send(updatedPaleta);
};

const deletePaletaController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "ID Inválido" });
  }
  await paletasService.deletePaletaService(idParam);
  res.send({ message: "Paleta deletada com sucesso" });
};
module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
