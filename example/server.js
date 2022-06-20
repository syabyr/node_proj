const http = require('http');


  console.log(`Primary ${process.pid} is running`);


  // 工作进程可以共享任何 TCP 连接
  // 在本示例中，其是 HTTP 服务器
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);
