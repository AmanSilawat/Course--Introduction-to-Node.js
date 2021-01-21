const fs = require('fs');

const file = fs.readFileSync('./demo-text.txt', { encoding: 'utf-8' })
    .toString();

console.log(file);