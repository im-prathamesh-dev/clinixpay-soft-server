const router = require("express").Router();
const { loginAdmin } = require("../../controllers/Admin/adminAuthController");
//const adminAuth = require("../../middlewares/adminAuth");

router.post("/login", loginAdmin);

module.exports = router;
