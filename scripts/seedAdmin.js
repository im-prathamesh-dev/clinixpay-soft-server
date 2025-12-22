const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("../models/Admin");

const seedAdmin = async () => {
  try {

    const existingAdmin = await Admin.findOne({
      email: "admin@clinixpay.com"
    });

    if (existingAdmin) {
      console.log("✅ Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("Admin@123", 10);

    const admin = await Admin.create({
      name: "Super Admin",
      email: "admin@clinixpay.com",
      password: hashedPassword,
      role: "admin"
    });

    console.log("🎉 Admin created successfully");
    console.log({
      email: admin.email,
      password: "Admin@123"
    });

    process.exit();
  } catch (error) {
    console.error("❌ Failed to seed admin", error);
    process.exit(1);
  }
};

seedAdmin();
