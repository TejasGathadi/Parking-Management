const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createBookingController,
  getBookingController,
} = require("../controllers/bookingController");
const router = express.Router();

// routes
// add booking

router.post("/create-booking", authMiddleware, createBookingController);

// get all booking
router.get("/get-booking", authMiddleware, getBookingController);

module.exports = router;
