import gulp from 'gulp';
import gulpCleanCss from 'gulp-clean-css';
import gulpHtmlmin from 'gulp-htmlmin';
import gulpImagemin from 'gulp-imagemin';
import gulpPostcss from 'gulp-postcss';
import gulpSourcemaps from 'gulp-sourcemaps';
import gulpWebp from 'gulp-webp';
import postcssCssnext from 'postcss-cssnext';
import postcssImport from 'postcss-import';
import stylelint from 'stylelint';

const dirs = {
  source: './source',
  dest: './dist',
};

gulp.task('css', () => gulp.src(`${dirs.source}/assets/css/style.css`)
  .pipe(gulpSourcemaps.init())
  .pipe(gulpPostcss([
    postcssImport(),
    postcssCssnext({
      features: {
        rem: false,
      },
    }),
  ]))
  .pipe(gulpCleanCss())
  .pipe(gulpSourcemaps.write('.'))
  .pipe(gulp.dest(`${dirs.dest}/assets/css`)));

gulp.task('html', () => gulp.src(`${dirs.source}/**/*.html`)
  .pipe(gulpHtmlmin({
    caseSensitive: false,
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: false,
    collapseWhitespace: true,
    conservativeCollapse: false,
    decodeEntities: false,
    html5: true,
    includeAutoGeneratedTags: false,
    keepClosingSlash: false,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true,
    preserveLineBreaks: false,
    preventAttributesEscaping: false,
    processConditionalComments: false,
    processScripts: false,
    quoteCharacter: false,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeEmptyElements: false,
    removeOptionalTags: true,
    removeRedundantAttributes: false,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeTagWhitespace: true,
    sortAttributes: true,
    sortClassName: true,
    trimCustomFragments: true,
    useShortDoctype: true,
  }))
  .pipe(gulp.dest(`${dirs.dest}`)));

gulp.task('images:content', () => gulp.src(`${dirs.source}/content/images/**/*.{gif,ico,jpg,jpeg,png}`)
  .pipe(gulpImagemin())
  .pipe(gulp.dest(`${dirs.dest}/content/images`)));

gulp.task('images:webp', () => gulp.src(`${dirs.source}/content/images/**/*.{gif,ico,jpg,jpeg,png}`)
  .pipe(gulpWebp())
  .pipe(gulp.dest(`${dirs.dest}/content/images`)));

gulp.task('lint:css', () => gulp.src(`${dirs.source}/assets/css/**/*.css`)
  .pipe(gulpPostcss([
    stylelint(),
  ])));

gulp.task('watch', () => {
  gulp.watch(`${dirs.source}/**/*.html`, ['html']);
  gulp.watch(`${dirs.source}/assets/css/**/*.css`, ['lint:css', 'css']);
  gulp.watch(`${dirs.source}/content/images/**/*.{gif,ico,jpg,jpeg,png}`, ['images']);
});

gulp.task('default', [
  'lint',
  'css',
  'html',
  'images',
  'watch',
]);

gulp.task('lint', [
  'lint:css',
]);

gulp.task('images', [
  'images:content',
  'images:webp',
]);

gulp.task('build', [
  'lint',
  'css',
  'html',
  'images',
]);
