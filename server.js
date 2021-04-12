const express = require('express')
const path = require('path')
const fs = require('fs')
const https = require('https')

const httpPort = 3000
const httpsPort = 30001
const key = fs.readFileSync('./certs/localhost.key');
const cert = fs.readFileSync('./certs/localhost.crt');

const app = express()
const server = https.createServer({key: key, cert: cert }, app);

app.use (function (req, res, next) {
  if (req.secure) {
          // request was via https, so do no special handling
          next();
  } else {
          // request was via http, so redirect to https
          res.redirect('https://' + req.headers.host + '1' + req.url);
  }
});

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(httpPort, function () {
  console.log(`Listening on port ${httpPort}!`)
})

server.listen(httpsPort, function () {
    console.log(`Listening on port ${httpsPort}!`)
})