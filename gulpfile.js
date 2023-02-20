const {src, dest} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");

exports.default = ()=>{
    return src("./source/styles/main.scss")
    .pipe(sass({
        outputStyle: "compressed"
    })).on("error", sass.logError)
    .pipe(dest("./build/styles"));
}
exports.default = ()=>{
    return src("./source/images/*")
    .pipe(imagemin()).on("error",imagemin.logError)
    .pipe(dest("./build/images"));
}