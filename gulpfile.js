var gulp    = require('gulp');
var inject  = require('gulp-inject-string');
var svg2png = require('gulp-svg2png');

var RED    = '#b30507';
var BLUE   = '#053378';
var YELLOW = '#fdd13d';
var WHITE  = '#ffffff';
var BLACK  = '#000000';
var BORDER = '#d8d8d8';

gulp.task('build', function() {
  gulp.src('./src/svg/*.svg')
  .pipe(inject.replace('RED', RED))
  .pipe(inject.replace('BLUE', BLUE))
  .pipe(inject.replace('YELLOW', YELLOW))
  .pipe(inject.replace('WHITE', WHITE))
  .pipe(inject.replace('BLACK', BLACK))
  .pipe(inject.replace('BORDER', BORDER))
  .pipe(gulp.dest('./dist/svg'))
  .pipe(svg2png())
  .pipe(gulp.dest('./dist/png'));
});
