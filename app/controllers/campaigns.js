"use strict";

var config = require('../config/config');
var mongoose = require('mongoose');
var async = require('async');

exports.index = function (req, res) {
  res.render('index')
}
