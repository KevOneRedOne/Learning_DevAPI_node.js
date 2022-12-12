const Product = require("../models/product.model.js");
const User = require("../models/user.model.js");

// CRUD - CREATE, READ, UPDATE, DELETE

// READ - User 
exports.getUser = (req, res) => {
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

// UPDATE - Update user (admin only)
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

// DELETE - Delete user (admin only)
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

// READ - All users (admin only)
exports.getAllUsers = (req, res) => {
    User.find()
    .then((users) => {
        res.send(users);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send(err);
    });
};

// UPDATE - Wishlist
exports.updateUserWishlist = (req, res) => {
    // Ajouter un ID produit dans la wishlist du user et afficher les propriétés du produit en retournant le user avec .populate    
    User.findbyId(req.userToken.id).then((user) => {
        const { wishlist } = user;

        if(!wishlist) {
            wishlist = [];
        }
        if(wishlist.includes(req.body.productId)) {
            return res.status(404).send({
                message: "Product already in whishlist"
            });
        }
        // user.wishlist.push(req.body.productId);
        wishlist.push(req.body.productId);
        wishlist.save().then((user) => {
            res.send(user);
        });
        
        
  
        user.wishlist.push(req.body.productId);
        user.save().then(userUpdate => {
            User.findById(req.userToken.id).populate('wishlist')
            .then(user => res.send(user))
            .catch(err => res.status(404).send(err))
        })
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send(err);
    });
};
