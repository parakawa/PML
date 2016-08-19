//los require son como import 
const gulp = require('gulp'),
	pug = require('gulp-pug'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');

//creando tareas task(nombreTarea,arrayDeTareasQueSeEjecutanAntes,funcion que se ejecuta)
gulp.task('sass', () => {
	gulp.src('./dev/scss/main.scss')
		.pipe(sass({//coge los datos y pasarlos a otro modulo o a otro plugin
			outputStyle: 'compact'
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./dist/css/'))
});
gulp.task('pug', () => 
	gulp.src('./dev/views/*.pug')
		.pipe(pug({
			pretty:true
		}))
		.pipe(gulp.dest('./dist/'))
);
gulp.task('default', () => {
	gulp.watch('./dev/scss/*.scss' , ['sass']);
	gulp.watch('./dev/views/**/*.pug' , ['pug']);
})