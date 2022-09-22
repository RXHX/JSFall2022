const reqResponse = {
  "/info" : "<h1>Information about the Website</h1>",
  "/contact":"<h1>Contact Information about the website</h1>",
  "/about":"<h1>About the Website</h1>",
  "/hello":"<h1> hello page about the page</h1>",
  "/error":"<h1> Error Page about the page </h1>"
};
const port = 3000;
const http = require("http");
const https =require("http-status-codes");
const app = http.createServer();
app.on("request",(req,res) =>{
     
    res.writeHead(https.StatusCodes.OK,
        { 
            "Content-type":"html/text"
        });

  if(reqResponse[req.url])
  {

   res.end(reqResponse[req.url]);
  }
  else{
    res.end(`<h1> No Such Page found</h1>`);
  }
});
app.listen(port);
console.log(`the app is ruuning at ${port}`);