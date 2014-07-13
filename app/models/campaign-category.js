"use strict";

var mongoose        = require('mongoose')
var Schema          = mongoose.Schema
var CreateUpdatedAt = require('mongoose-timestamp')
var crypto          = require('crypto')
var slug            = require('mongoose-url-slugs')

var CampaignCategory = new Schema({
      name: {
        type: String,
        required: true,
        index: true
      },
      picture: {
        type: String
      }
    })

CampaignCategory.plugin(CreateUpdatedAt)
CampaignCategory.plugin(slug('name'))

mongoose.model('CampaignCategory', CampaignCategory)
exports.CampaignCategory = CampaignCategory
