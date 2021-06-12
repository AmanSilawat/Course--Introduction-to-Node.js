const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

const img_path = path.join(__dirname, './../img/big-img.jpg');
console.log(img_path)

app.get('/', (req, res) => {
    const r_stream = fs.createReadStream(img_path);

    res.setHeader('ContentType', 'image/jpg')
    // r_stream.on('data', (chunk) => {
    //     res.write(chunk);
    // });
    
    // r_stream.on("end", () => {
    //     res.end();
    // });

    r_stream.pipe(res);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

