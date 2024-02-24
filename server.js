const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

// dot config
dotenv.config();

// mongodb connection
connectDB();

// rest Object
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
// ROUTES
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/booking", require("./routes/bookingRoutes"));

//port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.DEV_MODE} mode on port number ${process.env.PORT}`
      .bgBlue.white
  );
});
