const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// // Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");

// Обработка Video
const video = () => {
  return src(path.video.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "VIDEO",
        message: error.message
      }))
    }))
    .pipe(newer(path.video.dest))
    .pipe(dest(path.video.dest))
    .pipe(src(path.video.src))
    .pipe(newer(path.video.dest))
    .pipe(dest(path.video.dest));
}

module.exports = video;
