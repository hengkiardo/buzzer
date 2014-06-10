var express = require('express');
var Route = express.Router();
var config = require('./app/config/config');
var passport = require('passport');
var lodash = require('lodash')
// var Auth = require(config.root + '/app/middleware/authorization');
var fs = require('fs');

// var userController = require(config.root + '/app/controllers/users');
// var trickController = require(config.root + '/app/controllers/tricks');

// var API = {}
// API.tricks = require(config.root + '/app/controllers/API/tricks');
// API.Uploader = require(config.root + '/app/controllers/API/uploader');
// API.Users = require(config.root + '/app/controllers/API/users');

Route.get('/', function(req, res) {
  res.send('index');
});

module.exports = Route
