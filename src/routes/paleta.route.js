const route = require("express").Router();
const controllerPaletas = require("../controllers/paleta.controller");
const { validId,validObjectBody } = require("../middlewares/paleta.middleware");

route.get("/all-paletas", controllerPaletas.findAllPaletasController);
route.get("/one-paleta/:id",validId, controllerPaletas.findByIdPaletaController);
route.post("/create-paleta",validObjectBody, controllerPaletas.createPaletaController);
route.put("/update-paleta/:id",validId,validObjectBody, controllerPaletas.updatePaletaController);
route.delete("/delete-paleta/:id",validId, controllerPaletas.deletePaletaController);
module.exports = route;
