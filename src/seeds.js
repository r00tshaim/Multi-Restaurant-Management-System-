var mongoose = require("mongoose");
var Restaurants = require("./models/restaurant");
var Users = require("./models/user");
var Orders = require("./models/order");

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

var userData = [
  {
    name: "John Smith",
    email: "john@gmail.com",
    username: "johnsmith",
    password: "1234",
    dob: "09/12/1985",
    mobile: "648564656",
    level: "user",
  },
  {
    name: "Faizan Shah",
    email: "faizan@gmail.com",
    username: "faizanshah",
    password: "1234567789",
    dob: "26/01/1987",
    mobile: "6732476328",
    level: "cashier",
  },
  {
    name: "Aida Bugg",
    email: "aida@gmail.com",
    username: "bugg",
    password: "99999999",
    dob: "1/1/2001",
    mobile: "555555555",
    level: "superadmin",
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

function seedUserstoDB() {
  // Remove all Users
  Users.deleteMany({}, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("removed Users!");
      // add a few Users
      userData.forEach(function (seed) {
        Users.create(seed, function (err, user) {
          if (err) {
            console.log(err);
          } else {
            console.log("added a User!");
          }
        });
      });
    }
  });
}

const seedOrdersToDB = async () => {
  const restaurants = await Restaurants.find({});
  const users = await Users.find({});
  // console.log("Restaurent ====> ", restaurants);

  const ordersPromise = restaurants.map(async (restaurant) => {
    return Orders.create({
      restaurantId: restaurant._id,
      userId: users[0]._id,
      createdAt: "31-12-2021",
      status: "Cooking",
      tableNo: 22,
      quantity: 2,
    });
  });
  const savedOrders = await Promise.all(ordersPromise);
  console.log("Saved Orders ====> ", savedOrders);
};

module.exports = {
  seedDB,
  seedUserstoDB,
  seedOrdersToDB,
};
