const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

//пути к изначальным файлам
const paths = {
  styles: {
    src: 'src/styles/**/*.scss',
    dest: 'dist/css/'
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'dist/js/'
  }
};

//функция для вызыва del.deleteAsync, чтобы удалить файлы
async function clean() {
  try {
    console.log('Начинаем динамический импорт del...');
    const delModule = await import('del');
    console.log('Импортирован delModule:', delModule);
    
    const del = delModule.deleteAsync; // Используем deleteAsync вместо самого del
    console.log('Используем deleteAsync:', del);

    return del(['dist']); // Вызываем deleteAsync для удаления
  } catch (error) {
    console.error('Ошибка при импорте del:', error);
    throw error;
  }
}

gulp.task('clean', clean);

//задача для обработки стилей
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'main',
      suffix: ".min"
    }))
    .pipe(gulp.dest(paths.styles.dest));
}

//задача для обработки скриптов
function scripts(){
  return gulp.src(paths.scripts.src, {
    sourcemaps: true 
  })
  .pipe(babel())
  .pipe(uglify())
  .pipe(concat('main.min.js'))
  .pipe(gulp.dest(paths.scripts.dest));
}

//задача для наблюдателя обновлений стилей
function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
}

//задача для вызова 3 в одном очистка, обновление стилей, наблюдение за дальнейшими изменениями файлов
const build = gulp.series(clean, gulp.parallel(styles, scripts), watch);

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.build = build;
exports.default = build;