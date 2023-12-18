import gulp from 'gulp';
import browserSync from 'browser-sync';

import { config } from '../config/config.js';

export const fonts = () => {
  return gulp
    .src(config.FONTS_DIR)
    .pipe(gulp.dest(config.FONTS_OUTPUT_DIR))
    .pipe(browserSync.reload({ stream: true }));
};
