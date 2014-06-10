var express = require('express');
var Route = express.Router();
var config = require('./app/config/config');
var passport = require('passport');
var lodash = require('lodash')
var Auth = require(config.root + '/app/helper/authorization');
var fs = require('fs');

var userController = require(config.root + '/app/controllers/users');

Route
  .get('/login', userController.login)
  .get('/signup', userController.signup)
  .get('/logout', userController.logout)
  .post('/users/create', userController.create)
  .post('/users/session',
    passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
  }), userController.session)
  .get('/auth/twitter', passport.authenticate('twitter'))
  .get('/auth/twitter/callback',
    passport.authenticate('twitter',{
    failureRedirect: '/login' }), function(req, res) {
    res.redirect(req.session.returnTo || '/')
  })
  .get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'user_location'] }))
  .get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), function(req, res) {
    res.redirect(req.session.returnTo || '/')
  })
  .get('/', function(req, res) {
    res.render('index')
  })
module.exports = Route
