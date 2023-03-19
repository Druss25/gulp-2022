import clean from "gulp-clean";

export const reset = () => {
	return app.gulp.src(app.path.clean, {})
			.pipe(clean())
}