var gulp = require('gulp');
var compass = require('gulp-compass');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync');
var clean = require('gulp-clean');
var todo = require('gulp-todo');

gulp.task('cleantemp', function() {
    return gulp.src('.temp', {
            read: false
        })
        .pipe(clean({
            force: true
        }));
});

gulp.task('cleandist', function() {
    return gulp.src('.dist', {
            read: false
        })
        .pipe(clean({
            force: true
        }));
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('headerjs', function() {
    return gulp.src('js/header/**/*.js')
        .pipe(concat('header.dev.js'))
        .pipe(gulp.dest('.dist/js/header'))
        .pipe(rename('header.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('.dist/js/header'));
});

// Concatenate & Minify JS
gulp.task('footerjs', function() {
    return gulp.src('js/footer/**/*.js')
        .pipe(concat('footer.dev.js'))
        .pipe(gulp.dest('.dist/js/footer'))
        .pipe(rename('footer.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('.dist/js/footer'));
});

gulp.task('fonts', function() {
    return gulp.src('fonts/**/*')
        .pipe(gulp.dest('.dist/assets/fonts'));
});

gulp.task('images', function() {
    return gulp.src('images/**/*')
        .pipe(gulp.dest('.dist/assets/images'));
});

// output once in markdown and then output a json file as well 
gulp.task('todo-scss', function() {
    gulp.src('scss/**/*.scss')
        .pipe(todo({fileName: 'scss-todo.md' }))
        .pipe(gulp.dest('./styleguide/todo')) //output todo.md as markdown 
});

gulp.task('styles', function() {
    gulp.src('./scss/*.scss')
        .pipe(compass({
            css: '.temp/css',
            sass: 'scss',
            fonts: 'fonts',
            debug: false,
            style: 'expanded',
            comments: true,
            sourcemap: false,
            require: ['breakpoint']
        })).on('error', gutil.log)
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('.dist/css'))
        //.pipe(gulp.dest('app/assets/temp'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('.dist/css'))
        .pipe(notify({
            message: 'Styles task complete'
        }));
});

gulp.task('browser-sync', function() {
    browserSync({
        proxy: "styleguide.unity.dev:8080",
        startPath: "styleguide/index.htm"
    });
});



gulp.task('watch', function() {
    gulp.watch('js/header**/*.js', ['lint', 'headerjs']);
    gulp.watch('js/footer/**/*.js', ['lint', 'footerjs']);
    gulp.watch('fonts/**/*', ['fonts']);
    gulp.watch('images/**/*', ['images']);
    gulp.watch('scss/**/*.scss', ['styles']);
});

gulp.task('default', ['lint', 'fonts', 'images', 'styles', 'todo-scss', 'headerjs', 'footerjs', 'watch']);



gulp.task('browsersync', ['browser-sync'], function() {

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    //gulp.watch("js/*.js", ['js', browserSync.reload]);
    gulp.watch('styleguide/**/*', browserSync.reload);
    gulp.watch('js/header/**/*.js', ['lint', 'headerjs', browserSync.reload]);
    gulp.watch('js/footer/**/*.js', ['lint', 'footerjs', browserSync.reload]);
    gulp.watch('fonts/**/*', ['fonts', browserSync.reload]);
    gulp.watch('images/**/*', ['images', browserSync.reload]);
    gulp.watch('scss/**/*.scss', ['styles', browserSync.reload]);
});
