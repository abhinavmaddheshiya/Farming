const Farmer = require("./model");
exports.FarmerSignup = async (req, res) => {

	await Farmer.create(req.body);

	res.status(201).json({
		status: "success",
		body: req.body
	});

}
