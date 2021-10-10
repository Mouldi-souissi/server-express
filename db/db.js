const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = () => {
  mongoose
    .connect(
      // process.env.DB

      "mongodb+srv://mouldi:mouldi@cluster0.xhgla.mongodb.net/usersTest?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("DB is running ..."))
    .catch((err) => console.log(err));
};

module.exports = connectDb;
