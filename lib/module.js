'use strict';

module.exports = function(filePath, ext) {
  if (ext === '.rc') {
    const content = require('fs').readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    return data.theme;
  }
  const file = require(filePath);
  if (ext === '.json') return file.theme || file;
  return typeof file === 'function' ? file() : file;
}
