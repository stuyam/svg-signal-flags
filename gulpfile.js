var gulp   = require('gulp');
var inject = require('gulp-inject-string')

var RED    = 'RED';
var BLUE   = 'BLUE';
var YELLOW = 'YELLOW';
var WHITE  = 'WHITE';
var BLACK  = 'BLACK';
var BORDER = 'BORDER';

gulp.task('build', function() {
  gulp.src('./svg/*.svg')
  .pipe(inject.replace('RED', RED))
  .pipe(inject.replace('BLUE', BLUE))
  .pipe(inject.replace('YELLOW', YELLOW))
  .pipe(inject.replace('WHITE', WHITE))
  .pipe(inject.replace('BLACK', BLACK))
  .pipe(inject.replace('BORDER', BORDER))
  .pipe(gulp.dest('./dist'));
});
