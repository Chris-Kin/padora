var fs = require('fs');
var chalk = require('chalk');

module.exports = function(options) {
  fs.readdir(process.cwd(), function(err, files) {
    var list = files;
    var mode = options.tree || "1";
    console.log(chalk.yellow(mode));
    console.log(chalk.green(list.join('\n')));
  })
}
