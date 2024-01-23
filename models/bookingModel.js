const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    drivingLicense: {
      type: String,
      required: [true, "Please enter your Driving License"],
    },
    vehicleType: {
      type: String,
      required: [true, "Vehicle Type Required"],
      enum: ["car", "bike"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone Number is required"],
    },
    lPlateNumber: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "License plate number required"],
    },
    // email: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "users",
    //   required: [true, "Email required"],
    // },
    // startDate: {
    //   type: Date,
    //   required: true,
    // },
    // endDate: {
    //   type: Date,
    //   required: true,
    // },
    // startTime: {
    //   type: String,
    //   required: true,
    // },
    // endTime: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BookingData", bookingSchema);
