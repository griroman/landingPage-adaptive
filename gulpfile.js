var gulp = require('gulp');
	browserSync = require('browser-sync');
	del = require('del');
	build = require('gulp-build');

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: 'src'
		}
	});
});


gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('src/css/main.css', browserSync.reload);
	gulp.watch('src/index.html', browserSync.reload);
	gulp.watch('src/js/main.js', browserSync.reload);
});

gulp.task('default', ['watch']);

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('build', ['clean'], function() {
	gulp.src('src/css/*')
		.pipe(gulp.dest('dist/css'));

	gulp.src('src/img/*')
		.pipe(gulp.dest('dist/img'));


	gulp.src('src/js/main.js')
		.pipe(gulp.dest('dist/js'));

	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
});
