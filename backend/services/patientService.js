const otpGenerator = require("otp-generator");
const { Otp } = require("../models/otp")
const { Patient } = require("../models/patient")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const axios = require("axios");

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

