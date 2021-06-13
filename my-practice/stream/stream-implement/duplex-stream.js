const Stream = require('stream');

const readableStream = new Stream.Readable();
readableStream._read = () => { }

const writableStream = new Stream.Writable();

writableStream._write = (chunk, encoding, next) => {
    console.log(chunk.toString());
    next();
}

readableStream.push('hi!');
readableStream.push('ho!');
readableStream.push('hel abcd');

readableStream.pipe(writableStream);
