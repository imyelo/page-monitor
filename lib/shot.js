var webshot = require('webshot');
var _ = require('lodash');
var getTmpFilePath = require('./common').getTmpFilePath;

var baseOptions = {
  screenSize: {
    width: 320,
    height: 568
  },
  shotSize: {
    width: 320,
    height: 'all'
  },
  phantomConfig: {
    'proxy-type': 'none'
  }
};

module.exports = function (url, options, callback) {
  var startTime = Date.now();
  options = _.defaults({}, options, baseOptions);
  console.log('shot start: ' + url + ', ' + options.screenSize.width + 'x' + options.screenSize.height);
  webshot(url, getTmpFilePath(url, options.screenSize), options, function (err) {
    if (err) {
      console.error(err);
    }
    console.log('shot finished: ' + url + ', ' + options.screenSize.width + 'x' + options.screenSize.height + ' ... ' + ((Date.now() - startTime) / 1000) + 's');
    callback && callback();
  });
};
