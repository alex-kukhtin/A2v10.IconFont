const gulp = require('gulp');
const iconfont = require('gulp-iconfont');

const options = {
    normalize:true,
    fontHeight:1024,
    descent: 128,
    fontName: 'A2v10',
    metadata: 'icon font for a2v10',
    prependUnicode: true,
    round: 1000,
    formats: ['ttf', 'eot', 'woff', 'svg', 'woff2']
};

function getGlyph(g) {
    return g.unicode[0].charCodeAt(0).toString(16).toLowerCase();
}

gulp.task('iconfont', ['svgmin'], () => {
    return gulp.src(['dest/*.svg'])
    .pipe(iconfont(options))
    .on('glyphs', (glyphs) => {
        glyphs.forEach((g, i, arr) => {
            g.glyph = getGlyph(g);
        });
    })
    .pipe(gulp.dest('fonts'));
})