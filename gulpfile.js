const gulp = require('gulp');
const pug = require('gulp-pug');
gulp.task('pug', () => gulp.src('src/pug/*.pug')
.pipe(pug())
.pipe(gulp.dest('pages')));

gulp.task('watch', () =>  gulp.watch('src/pug/*', ['pug']));

gulp.task('default', ['pug', 'watch']);