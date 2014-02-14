var _ = require('lodash');
var shot = require('./shot');
var StepByStep = require('stepbystep');
var backup = require('./backup');
var diff = require('./diff');
var getSizes = require('./sizes');
var config = global['CONFIG'];
var tasks = config.tasks;

module.exports = function () {
  var step = new StepByStep();
  var startTime = Date.now();

  _.forEach(tasks, function (task) {
    var url = task.url;
    var options = task.options || {};
    _.forEach(getSizes(config.size), function (size) {
      var opts = _.defaults({}, options, {
        screenSize: size,
        shotSize: {
          width: size.width,
          height: 'all'
        }
      });
      step.add(function (done) {
        shot(url, opts, function () {
          done();
        });
      });
    });
  });

  step.done(function () {
    console.log('shot totally finished ... ' + ((Date.now() - startTime) / 1000) + 's. ');
    backup();
    diff();
  });
};

