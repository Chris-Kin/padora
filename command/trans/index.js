// var fs = require('fs');
var chalk = require('chalk');
// var request = require('request');


const Spinner = require('cli-spinner').Spinner;
const getresult = require('./getresult.js');

module.exports = function(options) {

  var word = options.word;

  // console.log( '正在查询' ,chalk.yellow(word));

  var spinner = new Spinner('%s');
  spinner.setSpinnerString('⠄⠆⠇⠋⠙⠸⠰⠠⠰⠸⠙⠋⠇⠆');
  spinner.start();

  getresult(word, spinner);

}
