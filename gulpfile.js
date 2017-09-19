var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;

gulp.task('test',function(){
    gulp.src('./specs/**/*.js')
    .pipe(protractor({
        configFile: 'protractor.conf.js'
    }))
});