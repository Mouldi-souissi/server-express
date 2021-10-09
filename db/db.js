const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = () => {
  mongoose
    .connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB is running ..."))
    .catch((err) => console.log(err));
};

module.exports = connectDb;
