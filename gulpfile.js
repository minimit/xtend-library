'use strict';

var fs = require('fs');
var gulp = require('gulp');
var merge = require('merge-stream');
var child = require('child_process');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

var less = require('gulp-less');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var browserify = require('browserify');
let uglify = require('gulp-uglify-es').default;
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var injectString = require('gulp-inject-string');

// fix less watch compile

var fileManagers = less.environment && less.environment.fileManagers || [];
fileManagers.forEach(fileManager => {
  if (fileManager.contents) {
    fileManager.contents = {};
  }
});

// compile less

gulp.task('less-dist', function () {
  return gulp.src(['dist/**/*.less', '!dist/**/_*.less'])
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(gulp.dest('dist/'))
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('dist/'));
});
gulp.task('less-demos', gulp.series('less-dist', function() {
  return gulp.src(['src/docs/demos/**/*.less', '!src/docs/demos/**/_*.less'])
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(gulp.dest('src/docs/demos/'));
}));
gulp.task('less-clean', gulp.series('less-demos', function() {
  // fix jekyll triggering file change
  return gulp.src(['docs/assets/styles/theme.*'], {read: false})
    .pipe(clean({force: true}));
}));
gulp.task('less', gulp.series('less-clean', function() {
  return gulp.src(['src/docs/assets/styles/**/*.less', '!src/docs/assets/styles/**/_*.less'])
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(gulp.dest('src/docs/assets/styles/'))
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('src/docs/assets/styles/'));
}));
gulp.task('less:watch', function (done) {
  gulp.watch(['dist/**/*.less', 'src/docs/demos/**/*.less', 'src/docs/assets/styles/**/*.less'], gulp.series('less'));
  done();
});

// compile js
gulp.task('js-dist', function () {
  var b = browserify({
    entries: 'src/scripts/xtend.js',
    debug: true
  }).transform('babelify');
  return b.bundle()
    .pipe(source('xtend.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(gulp.dest('dist/'))
    .pipe(uglify({
      output: {
        comments: 'some'
      }
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('dist/'));
});
gulp.task('js-clean', gulp.series('js-dist', function() {
  // fix jekyll triggering file change
  return gulp.src('docs/assets/scripts/theme.*', {read: false})
    .pipe(clean({force: true}));
}));
gulp.task('js', gulp.series('js-clean', function() {
  var b = browserify({
    entries: 'src/docs/assets/scripts/theme.js',
    debug: true
  }).transform('babelify');
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(gulp.dest('src/docs/assets/scripts/'))
    .pipe(uglify({
      output: {
        comments: 'some'
      }
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('src/docs/assets/scripts/'));
}));
gulp.task('js:watch', function (done) {
  gulp.watch(['src/docs/assets/scripts/theme.js', 'src/scripts/*.js'], gulp.series('js'));
  done();
});

// site

gulp.task('site-build', function (callback) {
  var jekyll = child.spawn('bundle', ['exec', 'jekyll', 'build']);
  var jekyllLogger = function (buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };
  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
  callback();
});
gulp.task('site-serve', function (callback) {
  var jekyll = child.spawn('bundle', ['exec', 'jekyll', 'serve']);
  var jekyllLogger = function (buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };
  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
  callback();
});

// version

gulp.task('version', function () {
  var version = JSON.parse(fs.readFileSync('package.json')).version;
  var banner = "/*! xtend v" + version + " (https://getxtend.com/)\n" + "@copyright (c) 2017 - 2018 Riccardo Caroli\n" + "@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */";
  // inject _config.yml
  var stream1 = gulp.src('_config.yml')
    .pipe(injectString.replace(/version: (.*)/, 'version: ' + version))
    .pipe(gulp.dest('./'));
  // inject styles and scripts
  var stream2 = gulp.src(['dist/core/__core.less', 'dist/theme/__theme.less', 'src/scripts/xtend.js'], {base: './'})
    .pipe(injectString.replace(/\/\*\![^\*]+\*\//, banner))
    .pipe(gulp.dest('./'));
  // return merge
  return merge(stream1, stream2);
});
gulp.task('version-changed',
  gulp.series('version', gulp.parallel('less', 'js'), 'site-build')
);
gulp.task('version:watch', function (done) {
  gulp.watch(['package.json'], gulp.series('version-changed'));
  done();
});

// scripts

gulp.task('watch',
  gulp.series('version', gulp.parallel('less', 'js'), gulp.parallel('site-serve', 'version:watch', 'less:watch', 'js:watch'))
);

gulp.task('build',
  gulp.series('version', gulp.parallel('less', 'js'), 'site-build')
);

gulp.task('default', gulp.series('build'));
