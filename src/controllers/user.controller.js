const User = require("../models/user.model.js");

// CRUD - CREATE, READ, UPDATE, DELETE

// READ
exports.getUser = (req, res) => {
    console.log(req.userToken.id);
    // Find one by id
    // User.findById(req.params.id)
    User.findById(req.userToken.id) 
    // callback
    .then((user) => {
        if (!user) {
            return res.status(404).send({
                message: "User not found with id "
            });
        }
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
}

exports.updateUser = (req, res) => {
    // Update one by id
    User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => {
        if (!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });
        }
        User.findById(user._id).then((user) => {
            res.send(user);
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send(err);
    });
};

exports.deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then((user) => {
        if (!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });
        }
        res.send(user);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send(err);
    });
};

exports.getAllUsers = (req, res) => {
    console.log(req.userToken.isAdmin);
    if (req.userToken.isAdmin === true) {
        User.find()
        .then((users) => {
            res.send(users);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send(err);
        });
    }
};