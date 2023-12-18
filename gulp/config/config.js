export const config = {
  BASE_DIR: 'src',
  OUTPUT_DIR: 'src/public',
  IS_PRODUCTION: false,
};

// Путь для отслеживания html
config.HTML_DIR = `${config.BASE_DIR}/**/*.html`;

// Путь для отслеживания scss
config.SCSS_DIR = `${config.BASE_DIR}/sass/**/*.scss`;
config.SCSS_OUTPUT_DIR = `${config.OUTPUT_DIR}/styles`;

// Путь для отслеживания js
config.JS_DIR = `${config.BASE_DIR}/js/**/*.js`;
config.JS_OUTPUT_DIR = `${config.OUTPUT_DIR}/js`;

// Путь для отслеживания картинок
config.IMAGES_DIR = `${config.BASE_DIR}/images/**/*.{png,svg}`;
config.IMAGES_OUTPUT_DIR = `${config.OUTPUT_DIR}/images`;

config.FONTS_DIR = `${config.BASE_DIR}/fonts/**/*.woff`;
config.FONTS_OUTPUT_DIR = `${config.OUTPUT_DIR}/fonts`;
