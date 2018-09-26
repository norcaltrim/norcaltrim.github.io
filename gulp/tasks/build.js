'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', () => {
    runSequence('clean', ['images', 'svg', 'scripts', 'styles'], 'views');
});
