const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "role is required"],
      enum: ["admin", "user"],
    },
    fname: {
      type: String,
      required: function () {
        if (this.role === "user") {
          return true;
        }
        return false;
      },
    },
    lname: {
      type: String,
      required: function () {
        if (this.role === "user") {
          return true;
        }
        return false;
      },
    },
    organizationName: {
      type: String,
      required: function () {
        if (this.role === "admin") {
          return true;
        }
        return false;
      },
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
      required: function () {
        if (this.role === "user") {
          return true;
        }
        return false;
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
