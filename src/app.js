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
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PWD}@cluster0.fekdrmv.mongodb.net/?retryWrites=true&w=majority`
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

// Créer une seconde route de type POST
// /login
// app.post("/auth/login", (req, res) => {
//   // console.log du body de la requête
//   console.log(req.body);
//   // Avec les Query
//   //   console.log(req.query);
//   console.log(req.body.username);
//   // Dans le controller = recupérer le body de la requête {username,password}
//   // renvoyer une réponse "vous êtes connectés"*
//   res.send("Bonjour, Vous êtes connectés");
// });

app.get("/products/:id", (req, res) => {
  // console.log du body de la requête avec les Query
  console.log(req.params);
  res.send(req.params.id);
});

// CRUD
//CREATE
//READ
//UPDATE
//DELETE

//Bonus Encryption des mdp


app.use("/api/v1", apiRouter);

// Méthode launch app
app.listen(process.env.PORT, function () {
  console.log("Server Up");
});
