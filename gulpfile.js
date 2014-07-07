var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var es = require('event-stream');

gulp.task('scripts', function () {
	var javaScriptFromCoffeeScript = gulp.src('src/*.coffee')
		.pipe(coffee());

	var javaScript = gulp.src('src/*.js');

	return es.merge(javaScriptFromCoffeeScript, javaScript)
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
});