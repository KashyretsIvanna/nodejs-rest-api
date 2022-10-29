const express = require("express");
const router = express.Router();
const signup = require("../../controllers/userControllers/signup");
const login = require("../../controllers/userControllers/login");
const logout = require("../../controllers/userControllers/logout");
const current = require("../../controllers/userControllers/current");
const changeAvatar = require("../../controllers/userControllers/avatar");
const multer = require("multer");
const path = require("path");
const app=require("../../app")
const verify=require("../../controllers/userControllers/verify")
const repeatVerification=require("../../controllers/userControllers/repeatVerification")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), "/tmp/"));
  },
  filename: (req, file, cb) => {
    const newName = file.originalname;
    cb(null, newName);
  },
});
const upload = multer({ storage: storage });

router.post("/login", login);
router.get("/logout", logout);
router.get("/current", current);
router.patch(
  "/avatars",

  upload.single("avatar"),

  changeAvatar
);
router.post("/signup", signup);
router.get("/verify/:verificationToken",verify)
router.post("/verify",repeatVerification)



module.exports = router;
