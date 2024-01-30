const path = require('path')

module.exports = {
  context: path.join(__dirname, "/src"),
  // webpackががビルドを始めるとき、どのファイルを起点にビルドするかを指定する。
  entry: './index.js',
  // ビルドしたファイルをどこにどんな名前で出力するかを指定する。 
  output: {
    path: `${__dirname}/dist`,
    filename: "./assets/js/main.js",
  },
  devtool: "hidden-source-map",
  mode: "development",
}