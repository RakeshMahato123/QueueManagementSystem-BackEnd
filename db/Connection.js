const mongoose = require("mongoose");
const URL = "mongodb://127.0.0.1:27017/queue";

const connectDB = async () => {
  await mongoose.connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  console.log("db connect..");
};

module.exports = connectDB;
