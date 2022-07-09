const paletasService = require("../services/paleta.service");

const findAllPaletasController = (req, res) => {
  const paletas = paletasService.findAllPaletasService();
  res.send(paletas);
};

const findByIdPaletaController = (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhaPaleta = paletasService.findByIdPaletaService(parametroId);
  res.send(escolhaPaleta);
};

const createPaletaController = (req, res) => {
  const paleta = req.body;
  const newPaleta = paletasService.createPaletaService(paleta);
  res.send(newPaleta);
};

const updatePaletaController = (req, res) => {
  const idParam = Number(req.params.id);
  const paletaEdit = req.body;
  const updatedPaleta = paletasService.updatePaletaService(
    idParam,
    paletaEdit
  );
  res.send(updatedPaleta);
};

const deletePaletaController = (req, res) => {
  const idParam = req.params.id;
  paletasService.deletePaletaService(idParam);
  res.send({ message: "Paleta deletada com sucesso" });
};
module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
