const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/db");
const userRoute = require("./api/user");
require("dotenv").config();

// connect to DB
connectDB();

// middlewars
app.use(express.json());
app.use(cors());

// routes
app.use("/api/", userRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`app is running on port ${PORT}`);
  }
});
