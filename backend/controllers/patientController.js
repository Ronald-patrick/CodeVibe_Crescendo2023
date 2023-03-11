const express = require("express");

const router = express.Router();
const {Auth} = require('../middlewares/auth')

const {
    patientLogin,
    otpVerification
} = require("../services/patientService");

// router.route("/upload").post(upload)

router.route("/login").post(patientLogin)
router.route("/otpVerify").post(otpVerification)

module.exports = router;
