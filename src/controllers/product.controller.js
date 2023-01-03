const Product = require('../models/product.model');

// CRUD - CREATE, READ, UPDATE, DELETE

// READ
exports.getAllProducts = (req, res) => {
  Product.find()
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
};

// CREATE
exports.createProduct = (req, res) => {
  Product.create(req.body).then((data) => {
    res.send(data);
  })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
};

// UPDATE
exports.updateProduct = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body)
    .then((product) => {
      if (!product) {
        return res.status(404).send({
          message: `Product not found with id ${req.params.id}`,
        });
      }
      Product.findById(product._id).then((product) => {
        res.send(product);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
};

// DELETE
exports.deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((product) => {
      if (!product) {
        return res.status(404).send({
          message: `Product not found with id ${req.params.id}`,
        });
      }
      res.send(product);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
};
