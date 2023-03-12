const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, unique: true },
		address: { type: String },
		phone_number : {type: String,required : true},
		aadhar : { type: String },
		access_list: {type: [mongoose.Schema.Types.ObjectId]},
		requests_list : {type: [mongoose.Schema.Types.ObjectId]},
		createdAt: {
			type: Date,
			default: Date.now,
		},
		reports : [
			{
				reportBy : String,
				date : {
					type: Date,
					default: Date.now,
				},
				xrays_data : [String],
				symptoms : [String],
				comments : String,
				amount : String,
				edgeDetection : String,
				segmentation : String,
				visualization : String,
				bloodReport : String
			}
		]
	},
	{ collection: 'patients-data' }
)


module.exports.Patient = mongoose.model("Patients", patientSchema);