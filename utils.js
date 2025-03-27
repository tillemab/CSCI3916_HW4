const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.DB);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("MongoDB connection error:", error);
      process.exit(1); // Exit the process if the connection fails (optional)
    }
};

module.exports = {
    connectDB: connectDB
}