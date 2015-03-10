'use strict';

var
    gulp = require('gulp')
  , browserify = require('browserify')
  , reactify = require('reactify')
  , source = require('vinyl-source-stream')
  , webserver = require('gulp-webserver')
;


gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      fallback: 'index.html'
    }));
});

gulp.task('js', function() {
    var onError = function(err) {
            console.log(err);
            this.end();
        };

    browserify({
        entries: ['./entry.js'],
        basedir: './src/'
    }).transform(reactify)
        .require('./entry', {expose: 'DoctorSearch'})
        .bundle()
        .on('error', onError)
        .pipe(source('demo.js'))
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ["js"])
});

gulp.task('default', ['js', 'webserver', 'watch']);
