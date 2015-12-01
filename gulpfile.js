var gulp = require('gulp');
var bless = require('gulp-bless');
var mqRemove = require("gulp-mq-remove");
var compass = require('gulp-compass');
var sass = require('gulp-sass');
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
var fs = require('fs');
var path = require('path');
var template = require('lodash.template');
var through = require('through2');
var directoryMap = require("gulp-directory-map");


var config = {
        
    dest: '.dist',

    sass: {
        src: './scss/**/*.{scss,sass}',
        dest: './.dist/css'
    },

    fonts: {
        src: './fonts/**/*',
        dest: './.dist/assets/fonts'
    },
    //css:'./css',
    //js:'./js',
    images: {
        src: './images/*.{png,gif,jpeg,jpg,svg}',
        dest: './.dist/assets/images'
    },

    jsheader: 
    {
        src: ['js/header/libraries/*.js', 'js/header/custom/*.js'],
        dest: '.dist/js/header'
    },

    jsfooter:
    {
        src: ['js/footer/libraries/*.js', 'js/footer/custom/*.js'],
        dest: '.dist/js/footer'
    }
      
};



// Concatenate & Minify JS
gulp.task('headerjs', function() {
    return gulp.src(config.jsheader.src)
        .pipe(concat('header.dev.js'))
        .pipe(gulp.dest(config.jsheader.dest))
        .pipe(rename('header.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.jsheader.dest));
});

// Concatenate & Minify JS
gulp.task('footerjs', function() {
    return gulp.src(config.jsfooter.src)
        .pipe(concat('footer.dev.js'))
        .pipe(gulp.dest(config.jsfooter.dest))
        .pipe(rename('footer.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.jsfooter.dest));
});

gulp.task('fonts', function() {
    return gulp.src(config.fonts.src)
        .pipe(gulp.dest(config.fonts.dest));
});

gulp.task('images', function() {
    return gulp.src(config.images.src)
        .pipe(gulp.dest(config.images.dest));
});




gulp.task('styles', function() {
    gulp.src(config.sass.src)
        .pipe(sass({
            css: config.sass.dest,
            sass: 'scss',
            fonts: 'fonts',
            debug: true,
            style: 'expanded',
            comments: true,
            sourceComments: true,
            sourcemap: false
        })).on('error', gutil.log)
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(config.sass.dest))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest(config.sass.dest))
        .pipe(rename({
            suffix: '.blessed.ie89'
        }))
        .pipe(bless())
        .pipe(gulp.dest(config.sass.dest))
        .pipe(mqRemove({ width: "1280px" }))
        .pipe(rename({
            suffix: '.blessed.ie7'
        }))
        .pipe(bless())
        .pipe(gulp.dest(config.sass.dest));

        //.pipe(gulp.dest('app/assets/temp'))
        
        //.pipe(notify({
        //    message: 'The Baron says: I can not handle all this Sass.'
        //}));


});

gulp.task('browser-sync', function() {
    browserSync({
        proxy: "styleguide.unity.dev:8080",
        startPath: "styleguide/index.html"
    });
});



gulp.task('watch', function() {
 //   gulp.watch('js/header**/*.js', ['lint', 'headerjs']);
 //   gulp.watch('js/footer/**/*.js', ['lint', 'footerjs']);
    gulp.watch('fonts/**/*', ['fonts']);
    gulp.watch('images/**/*', ['images']);
    gulp.watch('scss/**/*.scss', ['styles']);
});




gulp.task('default', ['fonts', 'images', 'styles', 'headerjs', 'footerjs', 'watch']);
//gulp.task('default', ['lint', 'fonts', 'images', 'styles', 'todo-scss', 'todo-js', 'headerjs', 'footerjs', 'watch']);

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