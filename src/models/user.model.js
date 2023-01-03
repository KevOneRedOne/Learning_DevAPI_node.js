const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// const validEmail = (email) => {
//   const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   return regexEmail.test(email);
// };

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
      trim:true,
      lowercase: true,
      unique: [true, 'Email already exists'],
      required: [true, 'Email is required'],
      // validate: [validEmail, "Please fill a valid email address"]
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
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

userSchema.pre('save', function(next) {
  
  if (!this.isModified('password')) {
    return next();
  }

  let hashedPassword = bcrypt.hashSync(this.password, 10);
  this.password = hashedPassword;
  next();
});


module.exports = mongoose.model("User", userSchema);
