const express = require("express");

const router = express.Router();
const {Auth} = require('../middlewares/auth')

const {
    patientLogin,
    otpVerification,
    getReports,
    verifyRequest,
    getAllRequest
} = require("../services/patientService");

// router.route("/upload").post(upload)

router.route("/login").post(patientLogin)
router.route("/otpVerify").post(otpVerification)
router.route("/get-reports").post(Auth,getReports)
router.route("/verify-request").post(Auth,verifyRequest)
router.route("/get-requests").post(Auth,getAllRequest)

module.exports = router;
