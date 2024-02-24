const bookingModel = require("../models/bookingModel");
const userModel = require("../models/userModel");

//create booking
const createBookingController = async (req, res) => {
  try {
    const { email } = req.body;
    // validation
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const booking = new bookingModel(req.body);
    await booking.save();
    return res.status(201).send({
      success: true,
      message: "New Booking Added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Create Booking API",
      error,
    });
  }
};

// get all booking
const getBookingController = async (req, res) => {
  try {
    const {} = req.body;
    const booking = await bookingModel
      .find({ lPlateNumber: req.body.userId })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: "Records fetched successfully",
      booking,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Fetching Data",
      error,
    });
  }
};

module.exports = { createBookingController, getBookingController };
