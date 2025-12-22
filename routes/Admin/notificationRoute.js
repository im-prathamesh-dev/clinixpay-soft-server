const router = require("express").Router();
const adminAuth = require("../../middlewares/adminAuth");
const {
  sendNotification
} = require("../../controllers/Admin/notificationController");




router.post("/send", adminAuth, sendNotification);
router.post("/sendAll", adminAuth, sendNotification);

module.exports = router;
