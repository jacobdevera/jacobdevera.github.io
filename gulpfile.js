const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('compress', () =>
  gulp.src('img/*.png')
    .pipe(imagemin())
    .pipe(gulp.dest('img/min'))
);