const express = require('express');
const path = require('path');
const app = express();
// const compression = require('compression');
// const fn = require('fn');

// app.use();

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
};

app.use(express.static('/public', options));

app.get('/home', function (req, res) {
  console.log('_home_');
  res.sendFile(path.join(__dirname, './', 'index.html'));
})

app.get('/', function (req, res) {
  console.log('__');
  res.send('hello world!');
})


let server = app.listen(5000, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log("应用实例，访问地址为 http://127.0.0.1:%s", port)
});