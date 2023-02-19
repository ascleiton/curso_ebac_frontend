const {src, dest} = require("gulp");
const sass = require("gulp-sass")(require("sass"));

exports.default = ()=>{
    return src("./source/styles/main.scss")
    .pipe(sass({
        outputStyle: "compressed"
    })).on("error", sass.logError)
    .pipe(dest("./build/styles"));
}
