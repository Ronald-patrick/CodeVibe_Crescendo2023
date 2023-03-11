const express = require("express");

const router = express.Router();
const {Auth} = require('../middlewares/auth')

const {
    register,
    login,
    addPatient
} = require("../services/hpService");

// router.route("/upload").post(upload)

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/add-patient").post(addPatient)

module.exports = router;









