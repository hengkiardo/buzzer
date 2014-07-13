"use strict"

var mongoose        = require('mongoose')
var Schema          = mongoose.Schema
var CreateUpdatedAt = require('mongoose-timestamp')
var crypto          = require('crypto')
var slug            = require('mongoose-url-slugs')
var mongooseTypes   = require("mongoose-types")

mongooseTypes.loadTypes(mongoose, "url")

var Campaign = new Schema({
      name: {
        type: String,
        required: true,
        index: true
      },
      category: {
        type: Schema.ObjectId,
        ref : 'CampaignCategory'
      },
      start_date: {
        type: Date,
        require: true
      },
      end_date: {
        type: Date,
        require: true
      },
      country: [{
        code: String,
        name: String
      }],
      origin_url: {
        type: mongoose.SchemaTypes.Url,
        require: true
      },
      brand: {
        type: String
      },
      description_objective: {
        type: String
      },
      attachments: [{
        filename: String,
        path: String,
        full_path : String,
        ext: String,
        uploaded : {
          type: Date,
          default: Date.now
        },
        creator_id: {
          type: Schema.ObjectId,
          ref : "User",
        }
      }]
    })

Campaign.plugin(slug('name'))
Campaign.plugin(CreateUpdatedAt)

mongoose.model('Campaign', Campaign)
exports.Campaign = Campaign
