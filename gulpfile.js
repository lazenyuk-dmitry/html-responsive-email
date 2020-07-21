const gulp = require('gulp');
const mjml = require('gulp-mjml');
const injectEnvs = require('gulp-inject-envs');
const gulpClean = require('gulp-clean');
const notify = require('gulp-notify');
const browserSync = require('browser-sync').create();

const mjmlEngine = require('mjml');

const env = {
  ...process.env,
};

const mjmlConfig = {
  minify: true, 
  fileExt: '.html', 
  validationLevel: 'strict',
}

function devServer() {
  return browserSync.init({
    server: {
      baseDir: './dist/',
      directory: true,
    },
    ui: false,
    open: false,
    watch: true,
    logLevel: 'debug',
  });
}

function handleError (err) {
  notify.onError({
    title:    "Gulp",
    subtitle: "Failure!",
    message:  "<%= error.message %>",
    sound:    "Beep"
  })(err);

  this.emit('end');
}

function copy() {
  return gulp.src('./src/assets/**')
    .pipe(gulp.dest('./dist/assets/'));
}

function clean() {
  return gulp.src('./dist/', { read: false, allowEmpty: true })
    .pipe(gulpClean());
}

function buildEmails() {
  return gulp.src('./src/pages/**.mjml')
    .pipe(injectEnvs(env))
    .pipe(mjml(mjmlEngine, mjmlConfig))
    .pipe(gulp.dest('./dist'))
}

function watch() {
  devServer();
  gulp.watch('./src/**/**.mjml', gulp.series(buildEmails));
  gulp.watch('./src/assets', gulp.series(copy));
}

exports.build = gulp.series(clean, copy, buildEmails);
exports.dev = gulp.series(clean, copy, buildEmails, watch);
