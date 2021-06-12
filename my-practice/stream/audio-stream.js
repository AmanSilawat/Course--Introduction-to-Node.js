const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

const audio_path = path.join(__dirname, './../audio/wohi-khuda-hai-coke-studio.mp3');

app.get('/', (req, res) => {
    const r_stream = fs.createReadStream(audio_path);

    res.setHeader('ContentType', 'audio/mp3')
    let i = 1;
    r_stream.on('data', (chunk) => {
        if (i <= 100) {
            console.log(chunk)
            res.write(chunk);
        }
        i++;
    });

    r_stream.on("end", () => {
        res.end();
    });

    // r_stream.pipe(res);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});

