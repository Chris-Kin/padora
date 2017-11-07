var request = require('request');
var chalk = require('chalk');

module.exports = function(options) {
  request('https://data.btcchina.com/data/ticker?market=all', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result = JSON.parse(body);
      console.log(result);
    }
  });
}
