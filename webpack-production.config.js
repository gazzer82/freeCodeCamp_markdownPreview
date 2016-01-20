var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(__dirname);
module.exports = {
  entry: [
    './src/app'
  ],
  devtool: 'source-map',
  output:{
    path: __dirname + '/dist/js',
    publicPath: '/js',
    filename: "app.js"
  },
  module: {
    loaders:[
      //JSX
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loaders: ['babel']
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ReactStarter',
      template: './src/html/index_template.html',
      inject: 'body',
      filename: '../index.html'
    })
  ],
  resolve: {
        extensions: [
            '', '.js', '.jsx',
            '.css', '.styl', '.scss', '.less', '.sass'
          ]
  }
}
