process.stdin.on('data', (data) => {
    console.log('some additional text ' + data.toString());
    process.exit();
});

/*
run this file in terminal `$ node 01-stdin.js` press enter
type any text and press enter
*/