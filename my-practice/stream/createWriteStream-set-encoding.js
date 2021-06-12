const path = require('path');
const fs = require('fs');

const w_stream = fs.createWriteStream(path.join(__dirname, './demo.txt'));

// write some string
w_stream.write('hello this a chunk.', 'utf8');

// end the write stream
w_stream.end();

w_stream.on('finish', () => {
    console.log('end of the writable stream');
});