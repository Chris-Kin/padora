#!/usr/bin/env node

'use strict';

var program = require('commander');

program
  .version('0.0.1');

program
  .command('l')
  .description('list files in current working directory')
  // 设置命令的参数
  .option('-t, --tree [mode]', 'Whether to display files tree graph')
  // 命令实现体
  .action(function(options) {
    require('../command/list.js')(options)
  })

program
  .command('trans')
  .description('translate words between chinese and english')
  // 设置命令的参数
  .option('-w, --word [mode]', 'the words which need be translated')
  // 命令实现体
  .action(function(options) {
    require('../command/trans.js')(options)
  })

program
  .command('btc')
  .description('detect the price of digital coins')
  .action(function(options) {
    require('../command/btc.js')(options)
  });

// 开始解析用户输入的命令
program.parse(process.argv);
