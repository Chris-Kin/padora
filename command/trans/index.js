// var fs = require('fs');
var chalk = require('chalk');
// var request = require('request');


const Spinner = require('cli-spinner').Spinner;
const getresult = require('./getresult.js');

module.exports = function(options) {

  var word = options.word;

  // var isEnglish = !/[^\x00-\xff]/.test(word);

  console.log(chalk.yellow(word));

  getresult(word, Spinner);
  // request('https://translate?a', function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     var result = JSON.parse(body);
  //     console.log(result);
  //   }
  // });

}
