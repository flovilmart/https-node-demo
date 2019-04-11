//
// Create the HTTPS proxy server in front of a HTTP server
//
const fs = require('fs');
const httpProxy = require('http-proxy');
httpProxy.createServer({
  target: {
    host: 'localhost',
    port: process.env.PORT || 8080
  },
  ssl: {
    key: fs.readFileSync('local.server.key', 'utf8'),
    cert: fs.readFileSync('local.server.cert', 'utf8')
  }
}).listen(443, () => console.log('proxy started'));
