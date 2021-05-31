const express = require('express');
const app = express();
const PORT = 3030;
const HOSTNAME = '127.0.0.1';

app.disable('x-powered-by');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.end('Hello, this is nodeJs server');
});

app.get('/get_data', (req, res) => {
    res.json({ status: "ok", message: 'Data is send successfully.' });
    res.end('done');
});

// ! Query Params request
// http://127.0.0.1:3030/set_data?firstname=aman&lastname=silawat
// app.post('/set_data', (req, res) => {
//     res.json({ status: "ok", message: `Welcome, ${req.query.firstname} ${req.query.lastname}`});
//     res.end('done');
// });

// ! x-www-form-urlencoded request
// http://127.0.0.1:3030/set_data
app.post('/set_data', (req, res) => {
    res.json({ status: "ok", message: `Welcome, ${req.body.firstname} ${req.body.lastname}` }).end();
});

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running on http://${HOSTNAME}:${PORT}`)
})