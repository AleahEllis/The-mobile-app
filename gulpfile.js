var gulp   = require('gulp'),
    stylus = require('gulp-stylus'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

// automagically compiles Stylus file into CSS
gulp.task('style', function () { 
  return gulp.src('./public/styles/beer.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./public/styles'));
});

// concats and minifies all JS files into one
gulp.task('js', function() { 
	gulp.src(['public/scripts/routes.js', 'public/scripts/**/*.js'])
	.pipe(concat('public/app.js'))
	.pipe(uglify())
	.pipe(gulp.dest('.'))
});

// watches for changes to any JS file and runs the above task
gulp.task('watch', ['js', 'style'], function () { 
	gulp.watch('public/scripts/**/*.js', ['js']);
	gulp.watch('./public/styles/beer.styl', ['style']);
});