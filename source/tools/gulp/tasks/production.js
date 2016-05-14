module.exports = function(gulp, $) {

    gulp.task('production-copy', function () {

        gulp.src($.config.paths.src + '/*.html')
            .pipe(gulp.dest($.config.paths.dist));

        gulp.src($.config.paths.src + '/images/**')
            .pipe(gulp.dest($.config.paths.dist + '/images/'));

        gulp.src($.config.paths.src + '/javascript/*')
            .pipe(gulp.dest($.config.paths.dist + '/javascript/'));

        gulp.src($.config.paths.src + '/styles/*')
            .pipe(gulp.dest($.config.paths.dist + '/styles/'));

        gulp.src($.config.paths.src + '/vulcanize/*')
            .pipe(gulp.dest($.config.paths.dist + '/vulcanize/'));

        gulp.src($.config.paths.src + '/bower_components/webcomponentsjs/webcomponents.js')
            .pipe(gulp.dest($.config.paths.dist + '/bower_components/webcomponentsjs/'));

    });

    gulp.task('production-clean', function () {
        return $.del($.config.paths.dist);
    });

    gulp.task('production', function( done ) {
        $.runSequence('production-clean', 'production-copy', done);
    });


};
