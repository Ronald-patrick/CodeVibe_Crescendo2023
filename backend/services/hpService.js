const { json } = require('express')
const jwt = require('jsonwebtoken')
const {HealthProvider} = require('../models/healthProvider')
const bcrypt = require('bcryptjs')
const { uploadFile } = require("../config/s3");

exports.register = async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await HealthProvider.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
            address : req.body.address,
            phone_number : req.body.phone_number,
            services : req.body.services
		})
		res.json({ status: 'ok' })
	} catch (err) {
		console.log(err.message)
		res.json({ status: 'error', error: 'Duplicate email' })
	}
}


// exports.upload = async (req, res) => {

// 	const { id } = req.body;
// 	let aadhar = req.files.aadhar;
// 	let filename = aadhar.name;
// 	const result = await uploadFile(
// 		req.files.aadhar.data,
// 		`${process.env.AWS_BUCKET_NAME}/${id}`,
// 		filename
// 	);
// 	console.log(result)

// 	aadharlink = result.Location;
// 	return res.json({ status: 'ok', link: aadharlink })
// }


exports.login = async (req, res) => {
	const user = await HealthProvider.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				id: user._id,
				email: user.email,
			},
			process.env.JWT_SECRET, { expiresIn: "24h" }
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
}

exports.addPatient = async (req, res) => {
	
}