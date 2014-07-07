var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var es = require('event-stream');

gulp.task('coffee', function () {
	return gulp.src('src/*.coffee')
	.pipe(coffee())
	.pipe(gulp.dest('src'));
});

gulp.task('scripts', ['coffee'], function () {
	return gulp.src('src/*.js')
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
});