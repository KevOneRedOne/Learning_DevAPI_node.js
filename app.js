const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/user.model");

require("dotenv").config();

app.use(bodyParser.json());

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
app.post("/login", (req, res) => {
  // console.log du body de la requête
  console.log(req.body);
  // Avec les Query
  //   console.log(req.query);
  console.log(req.body.username);
  // Dans le controller = recupérer le body de la requête {username,password}
  // renvoyer une réponse "vous êtes connectés"*
  res.send("Bonjour, Vous êtes connectés");
});

app.get("/products/:id", (req, res) => {
  // console.log du body de la requête avec les Query
  console.log(req.params);
  res.send(req.params.id);
});

// CRUD
// Create
app.post("/auth/register", (req, res) => {
  // const {firstname, lastname, email, password} = req.body
  console.log(req.body);
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  });

  newUser.save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// Read
// Find all
app.get("/auth", (req, res) => {
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// Find one by id
app.get("/auth/:id", (req, res) => {
  console.log(req.params.id);
  User.findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

// Update one by id

// Delete one by id


//Bonus Encryption des mdp



//Method launch app
// app.listen(3000, function () {
//   console.log("Server Up");
// });

app.listen(process.env.PORT, function () {
  console.log("Server Up");
});
