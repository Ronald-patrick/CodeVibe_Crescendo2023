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
    const OTP = otpGenerator.generate(6, {
        digits: true,
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
    });
    const otp = new Otp({ phone_number: phone_number, otp: OTP });
    const salt = await bcrypt.genSalt(10);
    otp.otp = (await bcrypt.hash(otp.otp, salt)).toString();
    const result = await otp.save();
    console.log(OTP);

    

    return res.status(200).send({ message: "OTP send successfully!",otp });
}

exports.otpVerification = async (req, res) => {
    const { phone_number, otp } = req.body;
    const otpHolder = await Otp.find({
        phone_number: phone_number,
    });

    if (otpHolder.length === 0)
        return res.status(400).send("Oops! Password got expired.");
    const rightOtpFind = otpHolder[otpHolder.length - 1];
    const validUser = await bcrypt.compare(otp, rightOtpFind.otp);

    if (rightOtpFind.phone_number === phone_number && validUser) {
        const OTPDelete = await Otp.deleteMany({
            phone_number: rightOtpFind.phone_number,
        });
        const patient = await Patient.findOne({ phone_number: phone_number });

        console.log(patient);

        const token = jwt.sign({
            userId: patient._id,
            phone: phone_number,
        }, process.env.JWT_SECRET, { expiresIn: "24h" })

        res.status(200).send({
            message: "Login Successfull!",
            token
        })
    }
    else {
        return res.status(400).send("Your Otp was wrong");
    }
}

