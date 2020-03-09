//创建一个服务器
const http = require('http');
const handleServer = require('../app');
http.createServer(handleServer).listen(8081);