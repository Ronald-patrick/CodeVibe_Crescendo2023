const express = require("express");

const router = express.Router();
const {Auth} = require('../middlewares/auth')

const {
    register,
    login,
    addPatient,
    addReport
} = require("../services/hpService");

// router.route("/upload").post(upload)

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/add-patient").post(Auth,addPatient)
router.route("/add-report").post(Auth,addReport)

module.exports = router;









