const http = require('http');
const port = 3030;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world')
})

server.listen(port, hostname, () => {
    console.log(`Server running on http://${hostname}:${port}`)
})
