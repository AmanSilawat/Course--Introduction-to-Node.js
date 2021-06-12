const path = require('path');
const fs = require('fs');

const r_stream = fs.createReadStream(path.join(__dirname, './pipe-stream.js'));
const w_stream = fs.createWriteStream(path.join(__dirname, './demo.txt'));

r_stream.pipe(w_stream);