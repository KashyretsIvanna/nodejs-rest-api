const express = require("express");
const router = express.Router();
const signup = require("../../controllers/userControllers/signup");
const login = require("../../controllers/userControllers/login");
const logout = require("../../controllers/userControllers/logout");
const current = require("../../controllers/userControllers/current");


router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/current",current)

module.exports = router;
