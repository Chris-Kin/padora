#!/usr/bin/env node

'use strict';

var program = require('commander');

program
  .version('0.0.1');

program
  .command('trans')
  .description('translate words between chinese and english')
  // 设置命令的参数
  .option('-w, --word [mode]', 'the words which need be translated')
  // 命令实现体
  .action(function(options) {
    require('../command')(options)
  })

// 开始解析用户输入的命令
program.parse(process.argv);
