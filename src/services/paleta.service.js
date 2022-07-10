/* const paletas = [
  {
    id: 1,
    sabor: "Açaí com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/acai-com-leite-condensado.png",
    preco: 10.0,
  },
  {
    id: 2,
    sabor: "Banana com Nutella",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/banana-com-nutella.png",
    preco: 10.0,
  },
  {
    id: 3,
    sabor: "Chocolate Belga",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/chocolate-belga.png",
    preco: 7.0,
  },
]; */
const Paletas = require('../models/Paleta');

const findAllPaletasService = async() => {
  const paletas = await Paletas.find();
  return paletas;
};

const findByIdPaletaService = async (parametroId) => {
  const paleta = await Paletas.findById(parametroId)
  return paleta;
};

const createPaletaService = async (newPaleta) => {
  const paletaCreated = await Paletas.create(newPaleta);
  return paletaCreated;
};

const updatePaletaService = async (id, paletaEdited) => {
  const paletaUpdate = await Paletas.findByIdAndUpdate(id,paletaEdited);
  return paletaUpdate;
};

const deletePaletaService = async (id) => {
   return await Paletas.findByIdAndDelete(id);
};
module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
