'use strict';

const lessToJs = require('less-vars-to-js');
const fs = require('fs');

module.exports = function(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return lessToJs(content);
}
