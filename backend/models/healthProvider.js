const mongoose = require('mongoose')

const hpSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		address: { type: String },
		phone_number : {type: String},
		services : [String],
		createdAt: {
			type: Date,
			default: Date.now,
		},
		patients_list : {type: [mongoose.Schema.Types.ObjectId]}
	},
	{ collection: 'health-provider' }
)


module.exports.HealthProvider = mongoose.model("Providers", hpSchema);