<<<<<<< HEAD
const gulp = require('gulp');
const pug = require('gulp-pug');
gulp.task('pug', () => gulp.src('src/pug/*.pug')
.pipe(pug())
.pipe(gulp.dest('pages')));

gulp.task('watch', () =>  gulp.watch('src/pug/*', ['pug']));

=======
const gulp = require('gulp');
const pug = require('gulp-pug');
gulp.task('pug', () => gulp.src('src/pug/*.pug')
.pipe(pug())
.pipe(gulp.dest('pages')));

gulp.task('watch', () =>  gulp.watch('src/pug/*', ['pug']));

>>>>>>> fa81fd0b64bbde2e568bc9bb4c2b2441b42dddda
gulp.task('default', ['pug', 'watch']);