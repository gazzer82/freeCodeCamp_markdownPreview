var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(__dirname);
module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/app'
  ],
  devtool: 'eval',
  resolve: {
        extensions: [
            '', '.js', '.jsx',
            '.css', '.styl', '.scss', '.less', '.sass'
          ],
          alias: {
          }
  },
  output:{
    path: __dirname + '/dist/js',
    publicPath: '/js',
    filename: "app.js",
    pathinfo: true
  },
  module: {
    loaders:[
      //JSX
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loaders: ['react-hot','babel']
      },
      //JS
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: ['react-hot','babel']
      },
      //SCSS
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loader: 'style!css!sass'
      },
      //CSS
      { test: /\.css$/,
        exclude: /(node_modules)/,
        loader: "style-loader!css-loader"
      },
      //Fonts
      {
      test: /\.(woff|woff2)$/,
      loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
      test: /\.ttf$/,
      loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
      test: /\.eot$/,
      loader: "file"
      },
      //Images
      {
      test: /\.svg$/,
      loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'ReactStarter',
      template: './src/html/index_template.html',
      inject: 'body',
      filename: '../index.html'
    })
  ]
}
