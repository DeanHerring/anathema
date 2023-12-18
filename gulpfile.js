import gulp from 'gulp';

// import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { watcher } from './gulp/tasks/watcher.js';
import { clean } from './gulp/tasks/clean.js';
import { images } from './gulp/tasks/images.js';
import { js } from './gulp/tasks/js.js';
import { fonts } from './gulp/tasks/fonts.js';

gulp.task('default', gulp.series(clean, scss, js, images, fonts, watcher));
