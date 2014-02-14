var _ = require('lodash');
var PNGDiff = require('png-diff');
var fs = require('fs');
var path = require('path');
var common = require('./common');
var fileUtils = require('./fileUtils');
var config = global['CONFIG'];

var directory = './' + common.getTimeString().replace(/:/g, '_') + '/';

module.exports = function () {
  var tmps = fileUtils.readdir(common.tmpPath);
  var destPath = path.join(common.outputPath, directory);
  fileUtils.mkdir(destPath);
  _.forEach(tmps, function (filename) {
    var src = path.join(common.tmpPath, filename);
    var dest = path.join(destPath, filename);
    fileUtils.copy(src, dest);
  });
};
