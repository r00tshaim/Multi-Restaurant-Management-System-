var mongoose = require("mongoose");

// SCHEMA SETUP
var orderSchema = new mongoose.Schema({
	restaurantId: {  type:mongoose.Schema.Types.ObjectId, ref:'Restaurant'},
 	userId: {  type:mongoose.Schema.Types.ObjectId, ref:'User'},
  	createdAt: String,
  	status: String,
  	tableNo: Number,
  	quantity: Number
});

module.exports = mongoose.model("Order", orderSchema);
