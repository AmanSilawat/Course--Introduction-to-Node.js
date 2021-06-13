const Stream = require('stream')

const readableStream = new Stream.Readable()
readableStream._read = () => { }

readableStream.push('hi!')
readableStream.push('ho!')
readableStream.push('Abcd')

console.log(readableStream.read().toString())