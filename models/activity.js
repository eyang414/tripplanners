'use strict';
const Sequelize = require('sequelize')
const db = require('./db');
const Place = require('./place.js');


var Activity = db.define('Activity', {

  name:
  {
    type: Sequelize.STRING,
    allowNull: false
  },

  age_range:
  {
    type: Sequelize.STRING,
    allowNull: false
  }

})


Activity.belongsTo(Place);





module.exports = db;
