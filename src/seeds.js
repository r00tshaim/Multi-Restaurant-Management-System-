var mongoose = require("mongoose");
var Restaurants = require("./models/restaurant");

var data = [
  {
    name: "Cloud Cafe",
    email: "cafe@cloud.com",
    logo:
      "https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png",
    address: "SG Highway, Ahmedabad",
    openingTime: "6:00PM",
    closingTime: "11:00PM",
    takingOrders: true,
    menu: [
      {
        name: "Item 1",
        price: 200,
        isAvailable: true,
        category: "Starter",
      },
      {
        name: "Item 2",
        price: 300,
        isAvailable: true,
        category: "Main Course",
      },
      {
        name: "Item 3",
        price: 2000,
        isAvailable: true,
        category: "Starter",
      },
    ],
  },
  {
    name: "Hotel Royal",
    email: "royal@hotel.com",
    logo:
      "https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png",
    address: "RTO, HMT",
    openingTime: "6:00AM",
    closingTime: "11:00PM",
    takingOrders: true,
    menu: [
      {
        name: "Item 1",
        price: 200,
        isAvailable: true,
        category: "Starter",
      },
      {
        name: "Item 2",
        price: 300,
        isAvailable: true,
        category: "Main Course",
      },
      {
        name: "Item 3",
        price: 2000,
        isAvailable: true,
        category: "Starter",
      },
    ],
  },
  {
    name: "The House Cafe",
    email: "house@cafe.com",
    logo:
      "https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png",
    address: "Mahavinagar, HMT",
    openingTime: "6:00PM",
    closingTime: "11:00PM",
    takingOrders: true,
    menu: [
      {
        name: "Item 1",
        price: 200,
        isAvailable: true,
        category: "Starter",
      },
      {
        name: "Item 2",
        price: 300,
        isAvailable: true,
        category: "Main Course",
      },
      {
        name: "Item 3",
        price: 2000,
        isAvailable: true,
        category: "Starter",
      },
    ],
  },
];

function seedDB() {
  // Remove all Restaurants
  Restaurants.deleteMany({}, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("removed Restaurants!");
      // add a few Restaurants
      data.forEach(function (seed) {
        Restaurants.create(seed, function (err, campground) {
          if (err) {
            console.log(err);
          } else {
            console.log("added a Restaurants!");
          }
        });
      });
    }
  });
}

module.exports = seedDB;
