const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

// Importation des routes et du fichiers index.js du fichier routes
const apiRouter = require('./routes');
// middleware=> bodyParser sert à parser
// les données reçues dans le body de la requête en format json
app.use(bodyParser.json());

// Connection à la base de données
mongoose
  .connect(
    // "mongodb+srv://"+process.env.MONGODB_USER +":"+process.env.MONGODB_PWD +"@cluster0.fekdrmv.mongodb.net/?retryWrites=true&w=majority",
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PWD}${process.env.MONGODB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`,
  )
  .then(() => {
    console.log('You are successfully connected to database');
  })
  .catch((err) => console.log(err));

app.get(
  '/', // routes = endpoint with GET method
  // controller
  (req, res) => {
    res.send('<h1>Hello World</h1');
  },
);

app.use('/api/v1', apiRouter);

// Méthode launch app
app.listen(process.env.PORT, () => {
  console.log('Server Up');
});
