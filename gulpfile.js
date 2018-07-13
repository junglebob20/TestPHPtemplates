var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('build-sass', function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});