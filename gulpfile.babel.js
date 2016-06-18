'use strict';

import gulp from 'gulp';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import babel from 'babelify';
import uglify from 'gulp-uglify';

gulp.task('default', () => {
  const bundler = browserify('./src/pivotal-module.js', {debug: true}).transform(babel);

  bundler.bundle()
    .pipe(source('angular-pivotal-tracker.min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});