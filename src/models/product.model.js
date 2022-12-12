//category - pas tout de suite
//Conrtolleur pour creer un produit protégé pour les admin
// 

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
        },
        productPrice: {
            type: Number,
            required: true,
        },
        productDescription: {
            type: String,
            required: true,
        },
        productReference: {
            type: String,
            required: true,
            unique: true,
        },
        StockProduct: {
            type: Number,
            required: true,
        },
        productThumbnail: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Product', productSchema);