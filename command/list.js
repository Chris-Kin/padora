var fs = require('fs');
var chalk = require('chalk');

module.exports = function(options) {
    fs.readdir(process.cwd(), function(err, files) {
        var list = files;
        if (!options.all) {
            list = files.filter(function(file) {
                return file.indexOf('.') !== 0;
            });
        }
        console.log(chalk.green(list.join('\n')));
    })
}
