#!/usr/bin/env node

'use strict';

var program = require('commander');


program
    .version('0.0.1');//声明y的版本号


program

    .command('list')//声明hi下有一个命令叫list

    .description('list files in current working directory')//给出list这个命令的描述

    .option('-a, --all', 'Whether to display hidden files')//设置list这个命令的参数

    .action(function(options) {//list命令的实现体
        require('../command/list.js')(options)
    });


program.parse(process.argv);//开始解析用户输入的命令
