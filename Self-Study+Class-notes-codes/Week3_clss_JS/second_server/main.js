const port = 3000;
const http =  require("http");
const httpStatus = require("http-status-codes");
app = http.createServer();
app.on("request",(req,res) => {
    res.writeHead(httpStatus.OK,{
        "Content-type":"text/html"
    });
    
    let responseMessage = `<h1>This will show on the screen</h1>`;
    //console.log(req.url);
    //console.log(req.methods);
    getJSONString(req);
    res.end(responseMessage);
});
const getJSONString = obj => {
    return JSON.stringify(obj,null,2);
}

app.listen(port);
console.log(`Server is starting at ${port}`);``