const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      lowercase: true,
      maxLength: 50,
      minLength: 2
    },
    lastname: {
      type: String,
      required: true,
      lowercase: true,
      maxLength: 50,
      minLength: 2
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      length: 50
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    wishlist: [
      {type: mongoose.Schema.Types.ObjectId, ref: "Product"}
    ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
