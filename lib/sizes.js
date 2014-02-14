var sizes = {
  all: [
    {
      width: 1366,
      height: 768
    },
    {
      width: 1024,
      height: 768
    },
    {
      width: 1280,
      height: 800
    },
    {
      width: 1920,
      height: 1080
    },
    {
      width: 1440,
      height: 900
    },
    {
      width: 768,
      height: 1024
    },
    {
      width: 1280,
      height: 1024
    },
    {
      width: 1600,
      height: 900
    },
    {
      width: 320,
      height: 480
    },
    {
      width: 320,
      height: 568
    }
  ],
  mobile: [
    {
      width: 320,
      height: 480
    },
    {
      width: 320,
      height: 568
    },
    {
      width: 768,
      height: 1024
    },
    {
      width: 1024,
      height: 768
    }
  ],
  test: [
    {
      width: 320,
      height: 480
    }
  ]
};

/**
 * get size
 * @param  {string|object} type preset key "all", "mobile" or "test", custom value like "320x480" or {width: 320, height: 480}
 * @return {array}      sizes array
 */
var getSizes = function (type) {
  var arr;
  if (typeof type === 'string' && type in sizes) {
    return sizes[type];
  } else if (typeof type === 'string' && (arr = type.match(/^(\d+)x(\d+)$/)).length === 3){
    return [
      {
        width: Number(arr[1]),
        height: Number(arr[2])
      }
    ];
  } else if (typeof type === 'object' && typeof type.width !== 'undefined' && typeof type.height !== 'undefined') {
    return [
      {
        width: Number(type.width),
        height: Number(type.height)
      }
    ];
  } else {
    throw new Error('undefined sizes');
  }
};

module.exports = getSizes;
