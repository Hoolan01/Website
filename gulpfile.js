var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');

//Compile SCSS

gulp.task('compileSass', function() {
  return gulp.src("src/scss/main.scss")
    .pipe(maps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer({overrideBrowserslist: ['> 1%', 'last 3 versions', 'Firefox >= 20', 'iOS >=7']})]))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

// //minify css

// gulp.task("minifyCss", gulp.series('compileSass', function () {
// 	return gulp.src("src/css/main.css", { sourcemaps: true })
// 	.pipe(cleanCSS({compatibility: 'ie8'}))
// 	.pipe(rename('main.min.css'))
// 	.pipe(gulp.dest('dist/css', { sourcemaps: '.' }));
//   }));

// //Combines JS

// gulp.task('combineJS', function() {
// 	return gulp.src([
// 		'src/js/function.js'
// 	])
// 		.pipe(concat('main.js'))
// 		.pipe(gulp.dest('src/js'))
// 		.pipe(browserSync.stream());
// });

// //minify JS

// gulp.task("minifyJS", gulp.series('combineJS', function () {
//     return gulp.src("src/js/main.js")
//         .pipe(uglify())
//         .pipe(rename('main.min.js'))
//         .pipe(gulp.dest('dist/js'));
// }));

  // Replace HTML block for Js and Css file upon build and copy to /dist

//   gulp.task('replaceHtmlBlock', function () {
// 	return gulp.src(['src/*.html'])
// 	  .pipe(htmlreplace({
// 		'js': './js/main.min.js',
// 		'css': './css/main.min.css'
// 	  }))
// 	  .pipe(htmlmin({ collapseWhitespace: true }))
// 	  .pipe(gulp.dest('dist'));
//   });

//   //fileinclude

//   gulp.task('fileinclude', async function() {
// 	gulp.src(['./src/html/*.html'])
// 	  .pipe(fileinclude({
// 		prefix: '@@',
// 		basepath: '@file',
// 		indent: true
// 	  }))
// 	  .pipe(gulp.dest('./src'));
//   });


//serve project

gulp.task('serve', gulp.series('compileSass', function () {

    browserSync.init({
        server: "./src"
    });

    gulp.watch('src/scss/**/*.scss', gulp.series('compileSass'));
    gulp.watch('src/js/function.js').on('change', browserSync.reload);
    gulp.watch('src/*.html').on('change', browserSync.reload);
}));
  


