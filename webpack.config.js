module.exports = {
  entry: [
    __dirname + '/src/index.js'
  ],
  output: {
    filename: "bundle.js",
    path: __dirname + '/dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["babel"],
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
}