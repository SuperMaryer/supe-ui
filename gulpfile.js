const gulp = require('gulp');
// const sass = require('gulp-sass')(require('node-sass')); // sass=>css
const sass = require('gulp-sass'); // sass=>css
const minifyCSS = require('gulp-minify-css'); 

debugger
gulp.task('sass', async function() {
    console.log(gulp.src('components/css/**/*.scss'));
    return gulp.src('components/css/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
})
