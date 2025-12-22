const Notification = require("../../models/Notification");
const Customer = require("../../models/Customer");

exports.sendNotification = async (req, res) => {
  const { userId, title, message, type } = req.body;

  // Send to ALL users
  if (!userId) {
    const users = await Customer.find().select("_id");

    const bulk = users.map((u) => ({
      userId: u._id,
      title,
      message,
      type
    }));

    await Notification.insertMany(bulk);

    return res.json({ success: true, message: "Notification sent to all users" });
  }

  // Send to single user
  await Notification.create({
    userId,
    title,
    message,
    type
  });

  res.json({ success: true, message: "Notification sent" });
};
