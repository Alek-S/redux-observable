import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('build:esm', () => {
  gulp.src('src/**/*.js')
    .pipe(babel({
      babelrc: false,
      presets: [
        ['env', { modules: false }]
      ],
      plugins: [
        'transform-function-bind',
        'transform-object-rest-spread'
      ]
    }))
    .pipe(gulp.dest('lib/esm'));
});
