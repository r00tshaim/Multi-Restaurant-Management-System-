var express = require("express");
var app = express();
var mongoose = require("mongoose");
var Restaurants = require('./models/restaurant');
var Users = require('./models/user');
var Orders = require('./models/order');
var {seedDB, seedUserstoDB} = require("./seeds");
var port = 3000;

seedDB();
seedUserstoDB();

mongoose.connect("mongodb://localhost/multi_rms", {
    useNewUrlParser: true
});

app.listen(port, function() {
    console.log("The Multi Resturant Management Server Has Started On Port:" + port);
});
