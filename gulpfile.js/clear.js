const gulp = require('gulp');
const del = require('del');

gulp.task('clear', [], () => {
    del('dest/*');
    del('fonts/*');
});