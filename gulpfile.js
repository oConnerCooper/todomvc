'use strict';

var path = require('path');
var nodemon = require('gulp-nodemon');
var gulp = require('gulp');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var postcss = require('gulp-postcss');
var gutil = require('gulp-util');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webpack = require('webpack');
var scss = require('postcss-scss');
var fs = require('fs');

var env = 'development';
var appVersion = '0';

// config environment symbol
process.env.NODE_ENV = env;

gulp.task('default', function() {
    runSequence('build', [
        'static', 'dev'
    ], 'serve');
});
/**
 * write built index.js to index.html
 */
gulp.task('build', ['bundle'], function() {});

gulp.task('bundle', function(callback) {
    var config = require(path.resolve('./webpack.config.js'));

    webpack(config, function(err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }
        gutil.log('[webpack]', stats.toString({}));
        callback();
    });
});

// 并行打包sass,image,vendor,bower
gulp.task('static', function() {
    runSequence(['sass', 'images', 'vendor', 'bower']);
});

gulp.task('sass', function() {
    var processors = [
        require('postcss-import'),
        require('postcss-nested'),
        require('postcss-mixins'),
        require('autoprefixer'),
        require('postcss-easings')
    ];

    gulp.src('./client/sass/**/*.scss').pipe(postcss(processors, { syntax: scss })).pipe(rename(function(path) {
        path.extname = '.css';
    })).pipe(gulp.dest('./static/css'));
});

/*
 * move images
 */
gulp.task('images', function() {
    gulp.src('./client/img/**/*.*').pipe(gulp.dest('./static/img'));
});

/*
 * move vendor
 */
gulp.task('vendor', function() {
    gulp.src('./client/vendor/**/*.*')
        .pipe(gulp.dest('./static/vendor'));
});

/*
 * move bower_components
 */
gulp.task('bower', function() {
    gulp.src('./client/bower_components/**/*.*')
        .pipe(gulp.dest('./static/bower_components'));
});

/*
 * auto pack jsx
 */
gulp.task('dev', function() {
    // 监控js下的React的脚本，有变化，就执行webpack的打包
    watch('client/js/**/*.js*', function() {
        runSequence('build');
    });

    watch('client/sass/**/*.scss', function() {
        // 监控sass
        runSequence('sass');
    });
});



/**
 * 起服务
 */
gulp.task('serve', function() {
    nodemon({
        nodeArgs: ['--harmony'],
        ignore: [
            'client/', 'static/'
        ],
        // 启动koa的脚本
        script: 'server/app.js'
    });
});

/**
 * compress js
 */
gulp.task('jscompress', function() {
    return gulp.src('./static/js/**/*.js').pipe(uglify()).pipe(rename(function(path) {
        path.extname = '.min-' + appVersion + '.js';
    })).pipe(gulp.dest('./static/js'));
});

/**
 * compress css
 */
gulp.task('csscompress', function() {
    return gulp.src('./static/css/**/*.css').pipe(minifyCss({ compatibility: 'ie8' })).pipe(rename(function(path) {
        path.extname = '.min-' + appVersion + '.css';
    })).pipe(gulp.dest('./static/css'));
});

/**
 * deploy
 */
gulp.task('deploy', ['bundle'], function() {
    env = 'production';
    appVersion = (+new Date());

    const deleteFolderRecursive = function(rootPath) {
        var files = [];
        if (fs.existsSync(rootPath)) {
            files = fs.readdirSync(rootPath);
            files.forEach(function(file, index) {
                var curPath = path.join(rootPath, file);
                if (fs.statSync(curPath).isDirectory()) {
                    // recurse
                    deleteFolderRecursive(curPath);
                } else {
                    // delete file
                    if (curPath.indexOf('min') > -1) {
                        fs.unlinkSync(curPath);
                    }
                }
            });
        }
    };

    deleteFolderRecursive(path.join(__dirname, '/static/js'));
    deleteFolderRecursive(path.join(__dirname, '/static/css'));

    // write appVersion to File
    const filePath = path.join(__dirname, '/server/config/version.js');

    console.log(filePath);

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) throw err;
        data = data.replace(/\'([0-9]*)\'/, `'${appVersion}'`);

        console.log('=', data);

        fs.writeFile(filePath, data, (err) => {
            if (err) throw err;
            console.log('Update Version Config');
            runSequence([
                'build', 'sass', 'images'
            ], ['jscompress', 'csscompress']);
        });
    });
});


