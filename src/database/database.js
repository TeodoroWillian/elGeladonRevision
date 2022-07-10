const mongoose = require("mongoose");

const connectToDataBase = () => {
  mongoose
    .connect("mongodb://localhost:27017/paletas-db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("mongodb connect!"))
    .catch((error) =>
      console.log(`Erro de conexão com o MongoDb! erro: ${error}`)
    );
};

module.exports = connectToDataBase;
