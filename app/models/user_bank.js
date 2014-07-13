"use strict";

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var CreateUpdatedAt = require('mongoose-timestamp')

var UserBank = new Schema({
    name: {
      type: String,
      require: true
    },
    user: {
      type: Schema.ObjectId,
      ref : 'User'
    },
    account_name: {
      type: String,
      require: true
    },
    account_number: {
      type: String,
      require: true
    },
    branch: {
      type: String
    }
})

UserBank.plugin(CreateUpdatedAt)

UserBank.statics = {
  load: function (id, cb) {
    this.findOne({ _id : id }).exec(cb)
  },
  getByUser: function (user_id, cb) {
    this.findOne({ _id : id }).exec(cb)
  },
}

module.exports = mongoose.model('UserBank', UserBank)
