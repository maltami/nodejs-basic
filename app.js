require('dotenv').config();
const http = require('http');

const hostname = process.env.domain;
const port = process.env.port;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello World!' + '\n');
  res.end(`Server running at http://${hostname}:${port}/`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
