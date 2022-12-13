const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/user.model");
require("dotenv").config();

// Importation des routes et du fichiers index.js du fichier routes
const apiRouter = require("./routes");

// middleware => bodyParser sert à parser les données reçues dans le body de la requête en format json
app.use(bodyParser.json());

// Connection à la base de données
mongoose
  .connect(
    // "mongodb+srv://"+process.env.MONGODB_USER +":"+process.env.MONGODB_PWD +"@cluster0.fekdrmv.mongodb.net/?retryWrites=true&w=majority",
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PWD}${process.env.MONGODB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("You are successfully connected to database");
  })
  .catch((err) => console.log(err));

app.get(
  "/", //routes = endpoint with GET method
  // controller
  function (req, res) {
    res.send("<h1>Hello World</h1");
  }
);

app.use("/api/v1", apiRouter);

// Méthode launch app
app.listen(process.env.PORT, function () {
  console.log("Server Up");
});

// Ajouter une route + controller spécifiquement pour la MAJ du mot de passe

// Appliquer le middleware mongoose .pre() pour hasher le mdp en base de données.

// Donc à chaque fois que le mdp va être modifié le middleware va déclencher le hashage du mdp.

// -> Déplacer le hash sur le controller