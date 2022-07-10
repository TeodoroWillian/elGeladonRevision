const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/paleta.route");
const connectToDataBase = require("./src/database/database");

const port = 3000;
const app = express();

connectToDataBase();
app.use(express.json());
app.use(cors());
app.use("/paletas", routes);

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`);
});
