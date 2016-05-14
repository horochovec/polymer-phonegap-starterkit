module.exports = function(gulp, $) {

	gulp.task('dev', function( done ) {
		$.runSequence('browserSync', done);
	});

};