const http = require('http');

app = http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);

    res.write('mrghaeli@yahoo.com');
    res.end();
    // res.end('simple text');
})

app.listen(4000, (err) => {
    console.log('Listening on 4000');
});