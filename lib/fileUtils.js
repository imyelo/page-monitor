var exports = {};
var fs = require('fs');

exports.mkdir = function (path) {
  try {
    fs.mkdirSync(path);
  } catch (ex) {}
};

exports.readdir = function (path) {
  var files = []
  try {
    files = fs.readdirSync(path);
  } catch (ex) {}
  return files;
};

exports.copy = function (src, dest) {
  try {
    fs.createReadStream(src).pipe(fs.createWriteStream(dest));
  } catch (ex) {}
};

exports.rename = function (src, dest) {
  try {
    fs.renameSync(src, dest);
  } catch (ex) {}
};

module.exports = exports;