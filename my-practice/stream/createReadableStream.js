const http = require('http');
const fs = require('fs');

const server = http.createServer();
server.on()

server.on('request', (req, res) => {
    // Reading from a stream
    // Create a readable stream
    // Handle stream events -> data, end, error
    const rStream = fs.createReadStream('./stream.js');
    rStream.on('data', (chunk) => {
        res.write(chunk);
    })
    rStream.on('error', (err) => {
        console.log(err)
    });
    rStream.on('end', () => {
        res.end();
    });
});

server.listen(3000, '127.0.0.1', () => {
    console.log('http://127.0.0.1:3000')
});
