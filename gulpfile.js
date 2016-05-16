var gulp = require('gulp');
var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');
var lvserver = require('gulp-live-server');

gulp.task('less', function() {
  gulp.src('./src/less/*.less')
    .pipe(less())
    .pipe(prefix({
      browsers: [
        "Android 2.3",
        "Android >= 4",
        "Chrome >= 20",
        "Firefox >= 24",
        "Explorer >= 8",
        "iOS >= 6",
        "Opera >= 12",
        "Safari >= 6"
      ]
    }))
    .pipe(gulp.dest('./src/css/'));
});

gulp.task('serve', function() {
  var server = lvserver.static('./src/', 8000);
  server.start();

  gulp.watch('./src/less/*.less', ['less']);
  gulp.watch(['./src/css/*.css', './src/index.html'], function(file) {
    lvserver.notify.apply(server, [file]);
  });
});
