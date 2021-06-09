const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    // Reading from a stream
    // Create a readable stream
    // Handle stream events -> data, end, error
    const rStream = fs.createReadStream('./stream.pipe.js');
    rStream.pipe(res);
});

server.listen(3000, '127.0.0.1', () => {
    console.log('http://127.0.0.1:3000')
});
