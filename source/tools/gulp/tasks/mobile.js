module.exports = function(gulp, $) {

	gulp.task('mobile-copy', function () {

        gulp.src($.config.paths.dist + '/*.html')
            .pipe(gulp.dest($.config.paths.mobile + '/www/'));

        gulp.src($.config.paths.dist + '/images/**')
            .pipe(gulp.dest($.config.paths.mobile + '/www/images/'));

        gulp.src($.config.paths.dist + '/javascript/**')
            .pipe(gulp.dest($.config.paths.mobile + '/www/javascript/'));

        gulp.src($.config.paths.dist + '/styles/**')
            .pipe(gulp.dest($.config.paths.mobile + '/www/styles/'));

        gulp.src($.config.paths.dist + '/vulcanize/**')
            .pipe(gulp.dest($.config.paths.mobile + '/www/vulcanize/'));

        gulp.src($.config.paths.resources + '/**')
            .pipe(gulp.dest($.config.paths.mobile + '/resources/'));

	});

	gulp.task('mobile-clean-resources', function() {
		return $.del($.config.paths.mobile + '/resources/*', {force: true});
	});

	gulp.task('mobile-clean-www', function () {
        console.log($.config.paths.mobile);
		return $.del($.config.paths.mobile + '/www/*', {force: true});
	});

	gulp.task('mobile', function( done ) {
		$.runSequence('mobile-clean-resources', 'mobile-clean-www', 'mobile-copy-android', done);
	});

};
