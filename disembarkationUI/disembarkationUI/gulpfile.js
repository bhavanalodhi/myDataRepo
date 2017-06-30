
var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');

var server = require('gulp-express');

var $ = require('gulp-load-plugins');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');

gulp.task('build', ['build-jade','build-less','copy-app-folder']);


gulp.task('copy-app-folder', function() {
    gulp.src('./app/**/*.*')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build-less', function(){
    return gulp.src('./app/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css/'));
});

// run this task by typing in gulp jade in CLI
gulp.task('build-jade', function() {
    return gulp.src('./app/css/*.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(gulp.dest('./dist/pages/')); // tell gulp our output folder
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./app/**/*.*', ['build-less','copy-app-folder']);
});

gulp.task('server',['build', 'watch'], function () {
  connect.server({
    root: 'dist/',
    port: 3000,
    livereload: true
  });
  livereload.listen();
});