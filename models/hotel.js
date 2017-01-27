'use strict';
const Sequelize = require('sequelize')
const db = require('./db');
const place = require('./place.js');

var Hotel = db.define('Hotel', {

  name:
  {
    type: Sequelize.STRING,
    allowNull: false
  },

  num_stars:
  {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: { min: 1, max: 5 }
  },

  amenities:
  {
    //QUESTION: how to make this pretty and comma separated???
    type: Sequelize.STRING,
    allowNull: false
  }

})


console.log('you should see hotel right here', Hotel);
Hotel.belongsTo(place);






module.exports = db;
