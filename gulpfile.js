var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var wait = require('gulp-wait');

gulp.task('styles', function() {
  gulp.src('scss/style.scss')
    .pipe(wait(100))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 5 versions']}))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.reload({stream: true}));
});

//Watch task
gulp.task('watch',function() {

  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('scss/*.scss',['styles']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('run', ['styles', 'watch']);
