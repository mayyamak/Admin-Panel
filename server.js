var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var config = require('./webpack.config')
const express = require('express')
var app = express()
var port = 5000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))

app.use('/design', express.static(__dirname + '/design'))

app.use(function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port,'127.0.0.1', function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
