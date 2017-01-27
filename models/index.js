'use strict';
const Sequelize = require('sequelize');
const db = require('./db');

const Activity =  require('./activity');
const Hotel = require('./hotel');
const Place = require('./place');
const Restaurant = require('./restaurant');

Activity.belongsTo(Place);
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = db;


// require all the models

// var Place = db.define('Place', {
//   address:
//   {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//
//   city:
//   {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//
//   state:
//   {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//
//   phone:
//   {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//
//   location:
//   {
//     type: Sequelize.FLOAT,
//     allowNull: false,
//   }
//
// })
//
// var Hotel = db.define('Hotel', {
//
//   name:
//   {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//
//   num_stars:
//   {
//     type: Sequelize.FLOAT,
//     allowNull: false,
//     validate: { min: 1, max: 5 }
//   },
//
//   amenities:
//   {
//     //QUESTION: how to make this pretty and comma separated???
//     type: Sequelize.STRING,
//     allowNull: false
//   }
//
// })
//
// var Activity = db.define('Activity', {
//
//   name:
//   {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//
//   age_range:
//   {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
//
// })
//
// var Restaurant = db.define('Restaurant', {
//
//   name:
//   {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//
//   cuisine:
//   {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//
//   price:
//   {
//     type: Sequelize.ENUM('1','2','3','4','5'),
//     //type: Sequelize.INTEGER,
//     allowNull: false,
//     validate: { min: 1, max: 5 }
//   }
//
// })
