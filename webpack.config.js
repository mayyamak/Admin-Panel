const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const env = process.env.NODE_ENV || 'development'

module.exports = {
  mode: env,
  devtool: env === 'development' ? 'eval' : 'source-map',
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
    sourceMapFilename: 'bundle.js.map',
    pathinfo: true,
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        compress: false,
        ecma: 6,
        mangle: true
      },
      sourceMap: true
    }),
    new webpack.optimize.LimitChunkCountPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(env)
      }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: ['react-native']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
}
