// File: Gulpfile.js

'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    inject = require('gulp-inject'),
    wiredep = require('wiredep').stream;


// Servidor web de desarrollo
gulp.task('server', function() {
    connect.server({
        root: './app',
        hostname: '0.0.0.0',
        port: 8080,
        livereload: true,
    });
});



// Busca en las carpetas de estilos y javascript los archivos que hayamos creado
// para inyectarlos en el index.html

gulp.task('inject', function() {
    var sources = gulp.src(['./app/scripts/**/*.js','!./app/scripts/main.js','./app/stylesheets/**/*.css']);
    var importantFile = gulp.src(['./app/scripts/main.js']);
    
    return gulp.src('index.html', {
        cwd: './app'
    })

    .pipe(inject(importantFile, {
        read: false,
        ignorePath: '/app',
        name: 'head'
    }))
    .pipe(inject(sources, {
        read: false,
        ignorePath: '/app'
    }))
    .pipe(gulp.dest('./app'));
});

// Inyecta las librerias que instalemos vía Bower

gulp.task('wiredep', function() {
    gulp.src('./app/index.html')
    .pipe(wiredep({
        directory: './app/lib'
    }))
    .pipe(gulp.dest('./app'));
});

gulp.task('copy', function() {
 gulp.src('./app/index.html')
 .pipe(useref())
 .pipe(gulp.dest('./dist'));
});

// Recarga el navegador cuando hay cambios en el HTML
gulp.task('html', function() {
    gulp.src('./app/**/*.html')
        .pipe(connect.reload());

});


gulp.task('watch', function() {
    gulp.watch(['./app/**/*.html'], ['html']);
    gulp.watch(['./app/scripts/**/*.js', './Gulpfile.js']);
    gulp.watch(['./app/stylesheets/**/*.styl'], ['inject']);
    gulp.watch(['./app/scripts/**/*.js', './Gulpfile.js'], ['inject']);
    gulp.watch(['./bower.json'], ['wiredep']);
});

gulp.task('default', ['server', 'watch']);