const gulp = require('gulp');
const scss = require('gulp-sass');
const concat = require('gulp-concat');


let paths = {
  js: 'js/**/*.js',
  scss: 'scss/**/*.scss',
  css: 'css/**/*.css'
};

gulp.task('js', function() {
  return gulp.src(paths.js)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./bin/js'));
});

gulp.task('scss', function () {
  return gulp.src(paths.scss)
    .pipe(scss())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./bin/css'))
});

gulp.task('css', function() {
  return gulp.src(paths.css)
    .pipe(concat('libs.css'))
    .pipe(gulp.dest('./bin/css'));
});


gulp.task('watch',['js', 'scss', 'css'], function () {
    gulp.watch(paths.js, ['js']),
    gulp.watch(paths.scss, ['scss']),
    gulp.watch(paths.css, ['css'])
});


