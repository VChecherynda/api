const path = require('path');

module.exports = {
    entry: "./src/index.ts",
    output: {
       filename: "index.js",
       path: path.resolve(__dirname, 'dist'),
       libraryTarget: 'system',
    },
    devServer: {
      static: {
         directory: path.join(__dirname, 'dist'),
      },
      headers: { 'Access-Control-Allow-Origin': '*' },
      compress: true,
      hot: false,
      liveReload: true,
      port: 5050,
    },
    resolve: {
       extensions: [".webpack.js", ".web.js", ".ts", ".js"]
    },
    module: {
       rules: [{ test: /\.ts$/, loader: "ts-loader" }]
    },
    watchOptions: {
      ignored: /node_modules/,
    },
}  