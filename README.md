## Простая сборка Gulp
---
### Структура каталогов для размещения файлов стилей и скриптов:
```
 ./src/styles/**/*.sass
 ./src/scripts/**/*.js
```
### Инструкция:
* Скачать все файлы в любую директорию
* Ввести в терминале команду: npm i (должен быть установлен node.js)
* Выполнить команду: gulp (запуск таска default)
* Писать свой код и наслаждаться автоматической сборкой проекта.
### Установленные NPM пакеты
- [gulp](https://www.npmjs.com/package/gulp) Сборщик Gulp
- [gulp-sass](npm i gulp-sass) Компиляция Sass файлов
- [gulp-babel](npm i gulp-babel) Преобразует Java Script в старый стандарт
- [gulp-concat](https://www.npmjs.com/package/gulp-concat) Объединение нескольких файлов в один
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) Сжатие и оптимизация Java Script кода
- [gulp-rename](https://www.npmjs.com/package/gulp-rename) Переименовывает файлы
- [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) Минификация и оптимизация CSS файлов
- [del](https://www.npmjs.com/package/del) Удаление каталогов и файлов
