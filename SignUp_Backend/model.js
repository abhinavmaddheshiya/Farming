const mongoose = require('mongoose');


const farmerSchema = new  mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true
		},
		subject: {
			type: String,
			required: true,
			unique: false
		},
		address: {
			type: String,
			required: true,
			unique: false
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		number: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true,
			unique: false
		},
		comment: {
			type: String,
			required: true,
			unique: false
		}
	}
);

const Farmer = mongoose.model("passenger", farmerSchema);
module.exports = Farmer;
