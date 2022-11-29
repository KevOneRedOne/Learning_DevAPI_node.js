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
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
