'use strict';
 
let gulp = require('gulp');
let sass = require('gulp-sass');
let uglifycss = require('gulp-uglifycss');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('css', function () {
    return gulp.src('./css/*.css')
      .pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
      }))
      .pipe(gulp.dest('./dist/'));
  });

gulp.task('run', gulp.series('sass', 'css'));

gulp.task('watch', function () {
    gulp.watch('./scss/*.scss', gulp.series('sass'));
    gulp.watch('./css/*.css', gulp.series('css'));
})

gulp.task('default', gulp.series('run', 'watch'));