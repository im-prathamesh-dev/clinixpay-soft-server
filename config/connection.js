const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is not defined in environment variables");
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      autoIndex: false,        // Disable index creation in production
      maxPoolSize: 10,         // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying for 5s
      socketTimeoutMS: 45000,  // Close sockets after 45s of inactivity
    });

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // Stop app if DB connection fails
  }
};

/* ---------------- Mongoose Event Handlers ---------------- */
mongoose.connection.on("disconnected", () => {
  console.warn("⚠️ MongoDB disconnected");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB error:", err);
});

/* ---------------- Graceful Shutdown ---------------- */
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("🔴 MongoDB connection closed due to app termination");
  process.exit(0);
});

module.exports = connectDB;
