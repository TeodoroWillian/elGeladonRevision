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
  const allPaletas = await Paletas.find();
  return allPaletas;
};

const findByIdPaletaService = async (idParam) => {
  const onePaleta = await Paletas.findById(idParam)
  return onePaleta;
};

const createPaletaService = async (newPaleta) => {
  const createdPaleta = await Paletas.create(newPaleta);
  return createdPaleta;
};

const updatePaletaService = async (idParam, editPaleta) => {
  const updatePaleta = await Paletas.findByIdAndUpdate(idParam,editPaleta);
  return updatePaleta;
};

const deletePaletaService = async (idParam) => {
   return await Paletas.findByIdAndDelete(idParam);
};
module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
