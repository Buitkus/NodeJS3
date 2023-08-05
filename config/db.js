const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn =
      await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASWD}@namai.8wmbz5p.mongodb.net/`);
      console.log(`Connected to MongoDB ${conn.connection.host}`);
  } catch (err) {
    console.error(`Could not connecto to MongoDB`, err);
  }
};

module.exports = connectDB;
