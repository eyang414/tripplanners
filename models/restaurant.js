'use strict';
const Sequelize = require('sequelize');
const db = require('./db');
const Place = require('./place.js');


var Restaurant = db.define('restaurant', {

  name:
  {
    type: Sequelize.STRING,
    allowNull: false
  },

  cuisine:
  {
    type: Sequelize.STRING,
    allowNull: false
  },

  price:
  {
    // type: Sequelize.ENUM(1, 2, 3, 4, 5),
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { min: 1, max: 5 }
  }

});


Restaurant.belongsTo(Place);

module.exports = Restaurant;
