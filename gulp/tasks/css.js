
export const css = () => {
  return app.gulp.src(['node_modules/normalize.css/normalize.css'])
    .pipe(app.plugins.concat(`_libs.scss`))
    .pipe(app.gulp.dest(app.path.src.lib))
}
