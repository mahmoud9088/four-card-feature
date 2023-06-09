// const gulp = require('gulp')
// const sass = require('gulp-sass')

// gulp.task('sass', function () {
//   return gulp
//     .src('./src/assets/scss/styles.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./src/assets/css'))
// })

const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
  return gulp
    .src('./src/assets/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css'))
}

exports.buildStyles = buildStyles

// exports.buildStyles = buildStyles;
// exports.watch = function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// };
