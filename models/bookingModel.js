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
    slotTime: {
      type: String,
      require: [true, "Please Provide Slot Time"],
    },
    slotDate: {
      type: Date,
      required: [true, "Please Provide Slot Date"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BookingData", bookingSchema);
