const mongoose = require("mongoose");
const { Schema } = mongoose;

//Create a User Schema

const UserSchema = Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//Exports model

module.exports = mongoose.model("User", UserSchema);
