module.exports = {
  entry: './app/main.js',
  output: {
    path: './public/',
    filename: 'index.js'
  },
  devServer: {
    contentBase: "./public",
    // hot: true,
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
