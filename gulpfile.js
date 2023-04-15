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

const isDevelopment = env.NODE_ENV === 'development';

const mjmlConfig = {
  minify: !isDevelopment,
  fileExt: '.html', 
  validationLevel: 'strict',
}

notify.logLevel(0);

function devServer() {
  return browserSync.init({
    server: {
      baseDir: './dist/',
      directory: true,
    },
    ui: false,
    open: false,
    watch: true,
    logLevel: 'info',
  });
}

function handleError (err) {
  notify.onError({
    title:    "Gulp",
    subtitle: "Error!",
    message:  "<%= error.message %>",
    sound:    "Beep",
  })(err);

  return err;
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
  gulp.watch('./src/**/**.mjml', gulp.series(buildEmails)).on("error", handleError);
  gulp.watch('./src/assets', gulp.series(copy)).on("error", handleError);
}

exports.build = gulp.series(clean, copy, buildEmails);
exports.dev = gulp.series(clean, copy, buildEmails, watch);
