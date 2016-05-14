module.exports = (function() {

  var path = require('path');

  var pkg = require('../package');
  
  var config = {};

  config.root = './';

  config.packages = [
    './package.json'
  ];
  
  config.tools = [
    'gulpfile.js',
    'tools/**/*.js'
  ];

  config.paths = {
    src       : 'src',
    dist      : 'dist',
    vulcanize : 'src/vulcanize',
    resources : 'resources',
    mobile   : '../mobile',
    crosswalk   : '../crosswalk',
  };

  return config;

})();