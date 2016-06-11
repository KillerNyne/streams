// Helpers

// Global dependencies
var Twitter = require('twitter');

var Helpers = {};

Helpers.getTwitterClient = function() {
  // Add your keys and access token credentials for your Twitter
  // developer application.
  // TODO: Move these values to environment variables. It's very
  // insecure to keep these values in your source code.
  var client = new Twitter({
    consumer_key: 'dRBaaQP9d6m1Yuovf72Iv8RDi',
    consumer_secret: 'ORQ5Fj1XpE1z2ZmbVXuruRYmEVXKc2LSBAhoctqMQHeGdTBAEf',
    access_token_key: '741682413433200640-TSaG07Nz2IM9LI9UHKTyYw2j61mPUgh',
    access_token_secret: '2kKfT295zrT9Xf7j5DtXtJKJAza40xivSyx7ZhkMaY1Df'
  });

  return client;
};

module.exports = Helpers;
