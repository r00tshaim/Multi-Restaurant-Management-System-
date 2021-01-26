var mongoose = require("mongoose");

// SCHEMA SETUP
var restaurantSchema = new mongoose.Schema({
  name: String,
  email: String,
  logo: String,
  address: String,
  openingTime: String,
  closingTime: String,
  takingOrders: Boolean,
  menu: [
    {
      name: String,
      price: Number,
      available: Boolean,
      category: ["Starter", "Main Course"],
    },
  ],
});

const menuSchema = new mongoose.Schema();

module.exports = mongoose.model("Restaurant", restaurantSchema);
