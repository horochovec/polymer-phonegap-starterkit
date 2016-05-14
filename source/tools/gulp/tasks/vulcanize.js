module.exports = function(gulp, $) {

	gulp.task('vulcanize-build', function () {
		return gulp.src($.config.paths.src + '/imports.html')
			.pipe($.vulcanize({
				abspath: '',
				inlineScripts: true,
				inlineCss: true,
				stripExcludes: false,
				stripComments: true,
				excludes: ['//fonts.googleapis.com/*'],
			}))
			.pipe(gulp.dest($.config.paths.vulcanize));
	});

	gulp.task('vulcanize-rename', ['vulcanize-build'], function () {
		return gulp.src($.config.paths.vulcanize + '/imports.html')
			.pipe($.rename("vulcanize.html"))
			.pipe(gulp.dest($.config.paths.vulcanize));
	});

	gulp.task('vulcanize-clean', ['vulcanize-rename'], function () {
		$.del([$.config.paths.vulcanize + "/imports.html"]);
	});

	gulp.task('vulcanize', ['vulcanize-clean']);

};