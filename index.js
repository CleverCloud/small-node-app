import http from 'http';

const port = 8080;
const server = http.createServer((req, res) => res.end(`Hello World!!! This is awesome`));
server.listen(port);
console.log(`HTTP server running at port ${port}`);
