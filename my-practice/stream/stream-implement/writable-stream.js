const Stream = require('stream')

const writableStream = new Stream.Writable();
writableStream._write = (chunk, encoding, next) => {
    console.log(chunk.toString());
    next();
}

process.stdin.pipe(writableStream);

/*
run this file in terminal `$ node writable-stream.js` press enter
type any text and press enter
*/