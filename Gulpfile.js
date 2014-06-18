var gulp = require('gulp');
var traceur = require('gulp-traceur');
var rjs = require('requirejs');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var fs = require('fs');

gulp.task('amd', function() {
    return gulp.src('src/**/*.js')
        .pipe(traceur({
            sourceMap: true,
            experimental: true,
            modules: 'amd'
        }))
        .pipe(gulp.dest('build/amd'));
});

gulp.task('build-amd', ['amd'], function(cb) {
    rjs.optimize({
        baseUrl: 'build/amd',
        useStrict: true,
        name: 'Color',
        out: 'build/Color.amd.js',
        optimize: 'none'
    }, function(/* buildResponse */) {
        cb();
    }, cb);
});

gulp.task('post-build-amd', ['build-amd'], function() {
    return gulp.src([
            'node_modules/gulp-traceur/node_modules/traceur/bin/traceur-runtime.js',
            'build/Color.amd.js'
        ])
        .pipe(uglify())
        .pipe(concat('Color.amd.min.js'))
        .pipe(gulp.dest('build/'));
});

gulp.task('default', ['post-build-amd']);
