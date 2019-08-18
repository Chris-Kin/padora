// var fs = require('fs');
var chalk = require('chalk');
// var request = require('request');


const Spinner = require('cli-spinner').Spinner;
const getresult = require('./getResult.js');

module.exports = function(options) {

  var word = options.word;

  var spinner = new Spinner('%s');
  spinner.setSpinnerString('⠄⠆⠇⠋⠙⠸⠰⠠⠰⠸⠙⠋⠇⠆');
  spinner.start();

  getresult(word, spinner);

}
