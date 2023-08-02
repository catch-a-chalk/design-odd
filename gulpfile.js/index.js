const { watch } = require("gulp");
const path = require('path');

global.$ = {
  // Пакеты
  gulp: require("gulp"),
  gp: require("gulp-load-plugins")(),
  browserSync: require("browser-sync").create(),

  // Конфигурация
  path: require("./config/path.js"),
  app: require("./config/app.js"),
}

// Задачи
const requireDir = require("require-dir");
const task = requireDir("./task", { recurse: true });

// Наблюдение
const watcher = () => {
  watch($.path.pug.watch, task.pug);
  watch($.path.scss.watch, task.scss);
  watch($.path.img.watch, task.img);
  watch($.path.video.watch, task.video);
  watch($.path.font.watch, task.font);
  watch($.path.js.watch, task.js);
}

const build = $.gulp.series(
  task.clear,
  $.gulp.parallel(task.pug, task.scss, task.img, task.video, task.font, task.js)
);

const dev = $.gulp.series(
  build,
  $.gulp.parallel(watcher, task.server)
);

// Задачи 
exports.pug = task.pug;
exports.scss = task.scss;
exports.img = task.img;
exports.video = task.video;
exports.font = task.font;
exports.js = task.js;

// Сборка
exports.default = $.app.isProd ? build : dev;
