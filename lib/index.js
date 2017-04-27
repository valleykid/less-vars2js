'use strict';

const fs = require('fs');
const path = require('path');

const getVarsFromFile = require('./file');
const getVarsFromModule = require('./module');

module.exports = function(filePath) {
  if (!path.isAbsolute(filePath)) {
    console.log('filePath must be a absolute path');
    return;
  }

  if (!fs.existsSync(filePath)) {
    console.log('file is not existed, please check it');
    return;
  }

  let ext = path.extname(filePath);
  let theme;
  if (path.basename(filePath) === '.roadhogrc') ext = '.rc';
  if (!ext || ext === '.less' || ext === '.txt') theme = getVarsFromFile(filePath);
  if (ext === '.js' || ext === '.json' || ext === '.rc') theme = getVarsFromModule(filePath, ext);
  if (theme) return JSON.stringify(theme);
}
