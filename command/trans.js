var fs = require('fs');
var chalk = require('chalk');
var request = require('request');

module.exports = function(options) {

  var word = options.word;

  var isEnglish = !/[^\x00-\xff]/.test(word);

  console.log(chalk.yellow(word));

  request('https://translate?a', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result = JSON.parse(body);
      console.log(result);
    }
  });
}
