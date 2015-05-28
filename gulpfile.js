var gulp = require('gulp');
var minify_html = require('gulp-minify-html');
 
gulp.task('minify_html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
 
  return gulp.src('src/*.html')
    .pipe(minify_html(opts))
    .pipe(gulp.dest('dist/'));
});

gulp.task('static', function(){
	return gulp.src(['src/robots.txt','src/favicon.ico'])
		.pipe(gulp.dest('dist/'));
})


gulp.task('default',['minify_html', 'static'],function(){
	console.log("finished!");
})