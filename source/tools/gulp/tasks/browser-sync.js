module.exports = function(gulp, $) {

    gulp.task('browserSync', function () {

    	$.browserSync.init({
            open: 'external',
            host: '0.0.0.0',
    		server: {
    			baseDir: $.config.paths.src
    		}
    	});

    	gulp.watch($.config.paths.src + "/javascript/*.js").on('change', $.browserSync.reload);
    	gulp.watch($.config.paths.src + "/styles/*.css").on('change', $.browserSync.reload);
        gulp.watch($.config.paths.src + "/styles/*.html").on('change', $.browserSync.reload);
    	gulp.watch($.config.paths.src + "/*.html").on('change', $.browserSync.reload);
        gulp.watch($.config.paths.src + "/elements/**").on('change', $.browserSync.reload);
        gulp.watch($.config.paths.src + "/locales/**").on('change', $.browserSync.reload);
        gulp.watch($.config.paths.src + "/images/**").on('change', $.browserSync.reload);

    });

};
