var redis = require('redis')
var multer  = require('multer')
var express = require('express')
var fs      = require('fs')
var exec = require('child_process').exec;
var app = express()
var httpProxy = require('http-proxy');
var http = require('http');
var port = 3010
// REDIS

console.log('hello')

var client = redis.createClient(50100, '10.0.2.15', {})
client.del("recent1");
app.get('/spawn', function(req, res) {
    exec('sh script.sh ' + port, function(err, out, code)
    {
      console.log("Launching blue instance");
      if (err instanceof Error)
            throw err;
      if( err )
      {
        console.error( err );
      }
    });
        client.lpush("queue", "http://10.0.2.15:" + port);
       port = port + 1;

})

var server = app.listen(8001, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})

