var gulp = require('gulp'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch');

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('reload', function() {
  gulp.src('*.html')
    .pipe(connect.reload());

  console.log('detected change');
})

gulp.task('watch', function() {
  gulp.watch('./*.html', ['reload']);
})

gulp.task('default', ['webserver', 'watch']);
