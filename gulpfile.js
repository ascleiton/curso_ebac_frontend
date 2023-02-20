const {src, dest, task} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify= require("gulp-uglify");

function comprimeJS(){
    return src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(dest("./build/scripts"));
}

exports.default = ()=>{
    return src("./source/styles/main.scss")
    .pipe(sass({
        outputStyle: "compressed"
    })).on("error", sass.logError)
    .pipe(dest("./build/styles"));
}

function compilaImagem(){
    return src("./source/images/*")
    .pipe(imagemin())
    .pipe(dest("./build/images"));
}

exports.script = comprimeJS;
exports.imagem = compilaImagem;