const Stream = require('stream');
const transformStream = new Stream.Transform();

transformStream._transform = (chunk, encoding, callback) => {
    console.log(chunk.toString().toUpperCase());
    callback();
}

process.stdin.pipe(transformStream);