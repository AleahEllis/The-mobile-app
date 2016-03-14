var gulp = require('gulp');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');



gulp.task('doStylus', function () { //this works well
  return gulp.src('lookinGood/beer.styl')
    .pipe(stylus())
    .pipe(gulp.dest('lookinGood'));
});
