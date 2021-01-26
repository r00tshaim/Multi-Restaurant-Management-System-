var mongoose = require('mongoose');

// SCHEMA SETUP
var restaurantSchema = new mongoose.Schema({
	name: String,
	email: String,
	logo: String,
 	address: String,
	openingTime: String,
	closingTime: String,
	takingOrders: Boolean,
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
