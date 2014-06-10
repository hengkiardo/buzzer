// config for the express app
// depending on `process.env.NODE_ENV`, default is `development`

var path = require('path')
  , rootPath = path.normalize(__dirname + '/../..')

var config = {
  // Development config
  //
  development: {
    server: {
      port: 3001,
      hostname: 'localhost',
    },
    database: {
      url: 'mongodb://localhost/findbuzzer_dev'
    },
    BaseApiURL : 'http://localhost:3001/api/',
    root     : rootPath,
    app      : {
      name : 'FindBuzzer'
    },
    twitterAuth: true,
    twitter: {
      consumerKey: process.env.TWITTER_KEY || 'xxxxxxxxxxxxx',
      consumerSecret: process.env.TWITTER_SECRET  || 'xxxxxxxxxxxxx',
      callbackURL: '/auth/twitter/callback',
      passReqToCallback: true
    },
    facebookAuth: true,
    facebook: {
      clientID: process.env.FACEBOOK_ID || 'xxxxxxxxxxxxx',
      clientSecret: process.env.FACEBOOK_SECRET || 'xxxxxxxxxxxxx',
      callbackURL: '/auth/facebook/callback',
      passReqToCallback: true
    },
    mailgun: {
      user: process.env.MAILGUN_USER || 'postmaster@sandbox49936.mailgun.org',
      password: process.env.MAILGUN_PASSWORD || '1fq8qzwl14w8'
    }
  },
  //
  // Production Config
  //
  production: {
    server: {
      port: 3001,
      hostname: process.env.HOSTNAME || '127.0.0.1',
    },
    database: {
      url: 'mongodb://localhost/findbuzzer'
    },
    BaseApiURL : 'http://localhost:3001/api/',
    root     : rootPath,
    app      : {
      name : 'FindBuzzer'
    },
    twitterAuth: true,
    twitter: {
      consumerKey: process.env.TWITTER_KEY || 'xxxxxxxxxxxxx',
      consumerSecret: process.env.TWITTER_SECRET  || 'xxxxxxxxxxxxx',
      callbackURL: '/auth/twitter/callback',
      passReqToCallback: true
    },
    facebookAuth: true,
    facebook: {
      clientID: process.env.FACEBOOK_ID || 'xxxxxxxxxxxxx',
      clientSecret: process.env.FACEBOOK_SECRET || 'xxxxxxxxxxxxx',
      callbackURL: '/auth/facebook/callback',
      passReqToCallback: true
    },
    mailgun: {
      user: process.env.MAILGUN_USER || 'postmaster@tukangslicing.net',
      password: process.env.MAILGUN_PASSWORD || '7f4v46je15w1'
    }
  },

  //
  // Testing config
  //
  test: {
    server: {
      port: 4001,
      hostname: 'localhost',
    },
    database: {
      url: 'mongodb://localhost/findbuzzer_test'
    }
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];
