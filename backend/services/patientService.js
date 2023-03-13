const otpGenerator = require("otp-generator");
const { Otp } = require("../models/otp")
const { Patient } = require("../models/patient")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const axios = require("axios");
const { HealthProvider } = require("../models/healthProvider");

exports.patientLogin = async (req, res) => {
    const phone_number = req.body.phone_number;
    const patient = await Patient.findOne({ phone_number: phone_number });
    if (!patient) {
        return res
            .status(400)
            .send("You are not an authorized");
    }

    const accountSid = process.env.TWILIO_SID;
    const authToken = process.env.TWILIO_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    client.verify.v2.services(process.env.TWILIO_VERIFY)
        .verifications
        .create({ to: "+91" + phone_number, channel: 'sms' })
        .then(verification => console.log(verification.sid));

    return res.status(200).send({ message: "OTP send successfully!" });
}

exports.otpVerification = async (req, res) => {
    const { phone_number, otp } = req.body;

    const accountSid = process.env.TWILIO_SID;
    const authToken = process.env.TWILIO_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    const ver = await client.verify.v2.services(process.env.TWILIO_VERIFY)
        .verificationChecks
        .create({ to: "+91" + phone_number, code: otp });

    if (ver.valid) {
        const patient = await Patient.findOne({ phone_number: phone_number });
        const token = jwt.sign({
            userId: patient._id,
            phone: phone_number,
        }, process.env.JWT_SECRET, { expiresIn: "24h" })

        return res.status(200).send({
            message: "Login Successfull!",
            token
        })
    }

    else {
        return res.status(400).send("Your Otp was wrong");
    }
}

exports.getReports = async (req, res) => {
    const user = req.user;
    try {
        const currUser = await Patient.findOne({
            "_id": user.userId
        })

        return res.status(200).send({ reports: currUser.reports })
    }

    catch (err) {
        return res.status(500).send("Something went wrong");
    }
}

exports.getAllRequest = async (req, res) => {
    const user = req.user;
    try {
        const allRequest = await Patient.findOne({
            "_id": user.userId
        })

        // const arr = [];

        // allRequest.requests_list.map(async (r) => {
        //     let id = r._id.toHexString();
        //     const hp = await HealthProvider.findOne({
        //         "_id": id
        //     })

        //     arr.push({
        //         "name": hp.name,
        //         "phone_number": hp.phone_number,
        //         "address": hp.address
        //     })

        //     console.log(arr);
        // })

        var arr = [];

        var results = await Promise.all(allRequest.requests_list.map(async (item) => {
            let id = item._id.toHexString();
            const hp = await HealthProvider.findOne({
                "_id": id
            })
            arr.push({
                "id":hp._id,
                "name": hp.name,
                "phone_number": hp.phone_number,
                "address": hp.address
            })

            return item;
        }));

        return res.status(200).send({ requests: arr })
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong")
    }
}

exports.verifyRequest = async (req, res) => {
    const user = req.user;
    const isValid = req.body.isVerified;
    const hpid = req.body.id;
    console.log(user);
    console.log(hpid);
    try {
        if (isValid) {
            const addId = await Patient.updateOne({ "_id": user.userId }, { $push: { "access_list": hpid } })
            const removeId = await Patient.updateOne({ "_id": user.userId }, { $pull: { "requests_list": hpid } })
            const addPatient = await HealthProvider.updateOne({"_id" : hpid}, { $push: { "patients_list": user.userId } })
        }
        else {
            const removeId = await Patient.updateOne({ "_id": user.userId }, { $pull: { "requests_list": hpid } })
        }
        return res.status(200).send({ message: "Request Handled" })
    } catch (error) {
        return res.status(500).send("Something went wrong")
    }
}