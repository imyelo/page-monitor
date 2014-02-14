var path = require('path');
var config = global['CONFIG'];

var getTimeString = function () {
  var date = new Date();
  return [
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate(),
  ].join('-') + ' ' + [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ].join(':');
};

var outputPath = exports.outputPath = path.join(config.output);
var tmpPath = exports.tmpPath = path.join(outputPath, './tmp/');
var lastPath = exports.lastPath = path.join(outputPath, './last/');
var diffPath = exports.diffPath = path.join(outputPath, './diff/');

var getTmpFilePath = function (siteUrl, size) {
  var sizeString = size && size.width && size.height ? '(' + size.width + 'x' + size.height + ')' : '';
  var filename = siteUrl.replace(/^\w+:\/\//, '').replace(/\//g, '-') + sizeString + '.png';
  return path.join(tmpPath, filename);
};

exports.getTimeString = getTimeString;
exports.getTmpFilePath = getTmpFilePath;