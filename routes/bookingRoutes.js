const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createBookingController,
  getBookingController,
  getAdminBookingController,
  createPaymentIdController,
} = require("../controllers/bookingController");
const router = express.Router();

// routes
// add booking

router.post("/create-booking", authMiddleware, createBookingController);

//Payment Id
router.post("/payment", authMiddleware, createPaymentIdController);

// get all booking
router.get("/get-booking", authMiddleware, getBookingController);

router.get("/get-admin-booking", authMiddleware, getAdminBookingController);

module.exports = router;
