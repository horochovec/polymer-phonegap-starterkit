var $       = module.exports = require('gulp-load-plugins')();

$.path      = require('path');
$.rootPath  = $.path.resolve( './' );

$.rootRequire = function( name ) {
  return require( $.path.join( $.rootPath, name ) );
};

$.del             = require('del');
$.lazypipe        = require('lazypipe');
$.runSequence     = require('run-sequence');
$.open            = require('open');
$.browserSync     = require('browser-sync').create();
$.inject          = require('gulp-inject');
$.pkg             = $.rootRequire('package.json');
$.config          = $.rootRequire('tools/config');
$.localip         = $.rootRequire('tools/lib/localip');

$.log = function(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
};

$.onError = function(err) {
  $.log(err);
};

$.project = function() {
  $.log('');
  $.log('Projeto: ' + $.pkg.name);
  $.log('Versão: ' + $.pkg.version);
  $.log('Descrição: ' + $.pkg.description);
  $.log('');
};