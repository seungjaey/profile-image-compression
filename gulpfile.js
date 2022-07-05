const { task, src, dest } = require('gulp');
const imageResize = require('gulp-image-resize');
const imageMin = require('gulp-imagemin');
const { mozjpeg } = imageMin;
const SOURCE_DIR = 'src/images/**/*';
const DIST_DIR = 'dist/images/';


task(
  'compress',
  () => src(SOURCE_DIR)
    .pipe(
      imageResize({
        width: 4000,
        height: 4000,
        crop: false,
      })
    )
    .pipe(
      imageMin([
        mozjpeg()
      ])
    )
    .pipe(dest(DIST_DIR))
);