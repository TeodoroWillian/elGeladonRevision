const route = require("express").Router();
const controllerPaletas = require("../controllers/paleta.controller");

route.get("/all-paletas", controllerPaletas.findAllPaletasController);
route.get("/one-paleta/:id", controllerPaletas.findByIdPaletaController);
route.post("/create-paleta", controllerPaletas.createPaletaController);
route.put("/update-paleta/:id", controllerPaletas.updatePaletaController);
route.delete("/delete-paleta/:id", controllerPaletas.deletePaletaController);
module.exports = route;
