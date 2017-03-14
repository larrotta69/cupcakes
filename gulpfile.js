var gulp = require('gulp');
var connect = require('gulp-connect')

gulp.task('onserver', function(){
connect.server({
	root:'app'
});
});
