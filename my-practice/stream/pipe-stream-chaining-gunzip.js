const path = require('path');
const fs = require('fs');
const zlib = require('zlib');

const r_stream = fs.createReadStream(path.join(__dirname, './pipe-stream.js.gz'));

r_stream
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('gunzip-extract.js'));

r_stream.on('end', () => console.log('end r_stream'))