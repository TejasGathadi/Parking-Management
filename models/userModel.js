const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "Name is required"],
    },
    lname: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    lPlateNumber: {
      type: String,
      required: [true, "License Plate Number Required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
