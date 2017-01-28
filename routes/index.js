'use strict';

const router = require('express').Router();
const Activity = require('../models/activity');
const Hotel = require('../models/hotel');
const Place = require('../models/place');
const Restaurant = require('../models/restaurant');

router.get('/', function (req, res, next) {
  var outerScopeContainer = {};

  Hotel.findAll()
    .then(function(allHotels){
      outerScopeContainer.allHotels = allHotels;
      return Restaurant.findAll()
        .then(function(allRestaurants){
          outerScopeContainer.allRestaurants = allRestaurants;
          return Activity.findAll()
            .then(function(allActivities){
              outerScopeContainer.allActivities = allActivities;
              res.render('index', {
                templateHotels: outerScopeContainer.allHotels,
                templateRestaurants: outerScopeContainer.allRestaurants,
                templateActivities: outerScopeContainer.allActivities
              });
            });
        });
    }).catch(next);
});






module.exports = router;
