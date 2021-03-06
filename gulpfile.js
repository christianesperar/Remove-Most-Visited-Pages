const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const jsonminify = require('gulp-jsonminify');
const stripDebug = require('gulp-strip-debug');

const dest = 'dist/';
const src = 'src/';

function build() {
  gulp.src(`${src}**/*.js`)
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest(dest));

  gulp.src(`${src}**/*.css`)
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest(dest));

  gulp.src(`${src}**/*.html`)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(dest));

  gulp.src(`${src}**/*.json`)
    .pipe(jsonminify())
    .pipe(gulp.dest(dest));

  gulp.src(`${src}**/*.png`)
    .pipe(gulp.dest(dest));
}

function watch() {
  gulp.watch([ `${src}**/*` ], [ 'build' ]);
}

gulp.task('build', build);
gulp.task('watch', watch);

gulp.task('default', [
  'watch',
  'build',
]);
