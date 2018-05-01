
const concat = require('gulp-concat');
const foreach = require('gulp-foreach');
const gulp = require('gulp');
const svgmin = require('gulp-svgmin');

const opts = {
    plugins: [{removeDoctype: true }, 
    { removeComments: true }, 
    { cleanupNumericValues: {floatPrecision: 0 }
    },
    { removeAttrs: {attrs:'xmlns|fill.*|stroke.*|baseProfile|width|height|fill-rule|version|enable-background'} }
    ]};

gulp.task('svgmin', function() {
    return gulp.src(['source/*.svg'])
        .pipe(foreach((stream, file) => {
            console.log(file.path);
            return stream
                .pipe(svgmin(opts));
        }))
        .pipe(gulp.dest('dest'));
});
