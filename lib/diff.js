var _ = require('lodash');
var PNGDiff = require('png-diff');
var fs = require('fs');
var path = require('path');
var config = global['CONFIG'];
var common = require('./common');
var fileUtils = require('./fileUtils');

module.exports = function () {
  var tmps = fileUtils.readdir(common.tmpPath);

  fileUtils.mkdir(common.lastPath);
  fileUtils.mkdir(common.diffPath);

  _.forEach(tmps, function (filename) {
    var src = path.join(common.tmpPath, filename);
    var dest = path.join(common.lastPath, filename);
    var output = path.join(common.diffPath, filename);
    PNGDiff.outputDiff(src, dest, output, function(err) {
      fileUtils.rename(src, dest)
      console.log('diff ... ok');
    });
  });
};
