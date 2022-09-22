
// const cities = require ("cities");
// var myCity = cities.zip_lookup("10016");
// console.log(myCity);


// const https = require('http');
// app = https.createServer((req,res) =>{
//    res.write(`<html><body><h1>Hello, World !</h1></body></html>`);
//    res.end();
// });

// app.listen(3000,(err)=>{
//   console.log("Listening on 3000");
// });


const port = 
3000,
http = require("http"),
httpStatus = require("http-status-codes"),
app = http.createServer((request,response) => {
console.log("Received an incoming request!");
response.writeHead(httpStatus.OK,{
    "Content-Type" : "text/html"
});
let responseMessage = `<h1>Hello, Universe !</h1>`;
response.write(responseMessage);
response.end();
console.log(`Sent a response : ${responseMessage}`);
});
console.log(port);
app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);

