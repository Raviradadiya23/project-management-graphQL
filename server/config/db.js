const mongoose = require("mongoose");

const connectDB = async () => {
  const connect = await mongoose.connect(process.env.MONGO_URL);
  console.log(
    `mongo database connected ${connect.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;
