module.exports = [
  {
    url: 'm.maizuo.com',
    options: {
      script: function () {
        $(function () {
          var timeout = 30000;
          var count = 0;
          var $lazy = $('.img-lazy-load');
          var every = function () {
            var ignore = 5;
            return _.every($lazy, function (elem) {
              return elem.loaded || ignore--;
            });
          };
          setTimeout(function () {
            window.callPhantom('takeShot');
          }, timeout);
          $lazy.on('load', function () {
            if (every()) {
              console.log('done');
              window.callPhantom('takeShot');
            } else {
              console.log(++count);
            }
          }).trigger('appear');
        });
      },
      takeShotOnCallback: true
    }
  }
];
