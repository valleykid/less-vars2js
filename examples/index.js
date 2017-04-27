'use strict';

const path = require('path');
const vars2js = require('../index');

// console.log('\n');
console.log('> theme.js result: ', vars2js(path.resolve(__dirname, './theme.js')));
console.log('> .roadhogrc result: ', vars2js(path.resolve(__dirname, './.roadhogrc')));
console.log('> package.json result: ', vars2js(path.resolve(__dirname, './package.json')));
console.log('> theme.txt result: ', vars2js(path.resolve(__dirname, './theme.txt')));
console.log('> theme.less result: ', vars2js(path.resolve(__dirname, './theme.less')));
