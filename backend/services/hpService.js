const jwt = require('jsonwebtoken')
const { HealthProvider } = require('../models/healthProvider')
const { Patient } = require('../models/patient')
const bcrypt = require('bcryptjs')
const { uploadFile } = require("../config/s3");
const { v4: uuidv4 } = require('uuid');

exports.register = async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await HealthProvider.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
			address: req.body.address,
			phone_number: req.body.phone_number,
			services: req.body.services,
			patients_list: req.body.patients_list
		})
		res.status(200).send({ message: 'Registered Successfully' })
	} catch (err) {
		console.log(err.message)
		res.status(500).send({ status: 'error', error: 'Duplicate email' })
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

		res.status(200).send({ message: 'Registered Successfully', token })
	} else {
		return res.status(500).send({ status: 'error' })
	}
}

exports.addPatient = async (req, res) => {
	const user = req.user;
	try {
		const patient = await Patient.create({
			name: req.body.name,
			email: req.body.email,
			address: req.body.address,
			phone_number: req.body.phone_number,
			access_list: [user.id],
			requests_list: [],
			reports: []
		})

		const getinsertedPatient = await Patient.findOne({
			phone_number: req.body.phone_number
		})

		const rel = await HealthProvider.updateOne({ "_id": user.id }, { $push: { "patients_list": getinsertedPatient._id } });

		res.status(200).send({ message: 'Patient Added Successfully' })

	} catch (err) {
		console.log(err.message)
		res.status(500).send({ error: "Cannot add Patient" })
	}
}

exports.addReport = async (req, res) => {
	const user = req.user;
	const pid = req.body.id;
	try {
		const report = {
			reportBy : req.body.hpname,
			xrays_data: req.body.xrayList,
			symptoms: req.body.symptoms,
			comments: req.body.comments
		}

		console.log(report);

		try {
			const rel = Patient.updateOne({ "_id": pid },
			{ $push: { "reports": report } }).then((arr)=> console.log(arr)).catch(err => console.log(err))
		}

		catch(err){
			console.log(err);
		}

		res.status(200).send({ message: "Report Added" })
	}

	catch (err) {
		console.log(err.message)
		res.status(500).send({ error: "Cannot add Patient" })
	}
}

exports.addRequest = async (req,res) =>{
    const user = req.user;
	const pid = req.body.id;
    try {
		console.log(pid);
        const rel = await Patient.updateOne({ "_id": pid }, { $push: { "requests_list": user.id } })
		res.status(200).send({ message: "Added request" })
    } catch (error) {
        res.status(500).send({ error: "Cannot add Request" })
    }
}

exports.getHpData = async(req,res) =>{
	const user = req.user;
	try {
		const provider = await HealthProvider.findOne({
			"_id" : user.id
		})

		console.log(provider);
		res.status(200).send({ provider })
	} catch (error) {
		res.status(500).send({error : "Cannot Get Data"})
	}	
}

exports.getPatients = async(req,res) =>{
	const user = req.user;
	try {
		const provider = await HealthProvider.findOne({
			"_id" : user.id
		})

		let arr = []
		
        let results = await Promise.all(provider.patients_list.map(async (p) => {
            let id = p.toHexString();
            const hp = await Patient.findOne({
                "_id": id
            })
            arr.push(hp)

            return p;
        }));

		res.status(200).send(arr)

	} catch (error) {
		res.status(500).send({error : "Cannot Get Data"})
	}
}

exports.uploadFiles = async(req,res)=>{
	try {
		if (req.files) {
			let xrayLink = ''
			let breportLink = ''
			let xray = req.files.xray;
			let filename = xray.name;

			const result = await uploadFile(
				req.files.xray.data,
				`${process.env.AWS_BUCKET_NAME}/${uuidv4()}`,
				filename
			);

			xrayLink = result.Location;

			let breport = req.files.bloodReport;
			filename = breport.name;

			const result2 = await uploadFile(
				req.files.bloodReport.data,
				`${process.env.AWS_BUCKET_NAME}/${uuidv4()}`,
				filename
			)

			breportLink = result2.Location;

			res.status(200).send({
				xrayLink,
				breportLink
			})

		}

	} catch (error) {
		
	}
}