// gulpfile.js
const gulp = require("gulp");
const sass = require("gulp-sass");

// a task to generate the css with sass
gulp.task("css", function() {
  return gulp
    .src("./src/scss/all.scss")
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest("./govuk-frontend"));
});

gulp.task("assets", function() {
  return gulp
    .src("node_modules/govuk-frontend/govuk/assets/**/*")
    .pipe(gulp.dest("./assets"));
});
