const mongoose = require("mongoose");

const connectToDataBase = () => {
  mongoose.connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("mongo Atlas Conectado!"))
    .catch((error) =>
      console.log(`Erro de conexão com o MongoDb! erro: ${error}`)
    );
};

module.exports = connectToDataBase;
