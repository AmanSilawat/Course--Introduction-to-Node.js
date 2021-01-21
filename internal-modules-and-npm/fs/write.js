const fs = require('fs');
fs.writeFileSync('./demo-text.txt', 'This file is modified.')
const file = fs.readFileSync('./demo-text.txt', { encoding: 'utf-8' })
    .toString();

console.log(file)