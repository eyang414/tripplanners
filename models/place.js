'use strict';
const Sequelize = require('sequelize')
const db = require('./db');

var Place = db.define('Place', {
  address:
  {
    type: Sequelize.STRING,
    allowNull: false,
  },

  city:
  {
    type: Sequelize.STRING,
    allowNull: false,
  },

  state:
  {
    type: Sequelize.STRING,
    allowNull: false,
  },

  phone:
  {
    type: Sequelize.STRING,
    allowNull: false,
  },

  location:
  {
    type: Sequelize.FLOAT,
    allowNull: false,
  }

})






module.exports = db;