const express = require("express");

const router = express.Router();
const {Auth} = require('../middlewares/auth')

const {
    register,
    login,
    addPatient,
    addReport,
    addRequest,
    getHpData,
    getPatients,
    uploadFiles
} = require("../services/hpService");

// router.route("/upload").post(upload)

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/add-patient").post(Auth,addPatient)
router.route("/add-report").post(Auth,addReport)
router.route("/add-request").post(Auth,addRequest)
router.route("/get-provider-data").post(Auth,getHpData)
router.route("/get-patients-list").post(Auth,getPatients)
router.route("/upload-files").post(uploadFiles)

module.exports = router;









