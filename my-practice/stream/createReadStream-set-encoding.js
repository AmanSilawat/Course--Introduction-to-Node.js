const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

const txt_path = path.join(__dirname, './createReadStream-set-encoding.js');

const r_stream = fs.createReadStream(txt_path);
r_stream.setEncoding('utf-8');

let  data = '';
r_stream.on('data', (chunk) => {
    data += chunk;
    console.log(chunk)
});

r_stream.on("end", () => {
    console.log('end : ', data)
});

// app.get('/', (req, res) => {});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

