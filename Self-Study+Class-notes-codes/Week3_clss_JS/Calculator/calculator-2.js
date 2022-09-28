// express for api call
import express from 'express';
// for api body handling
import bodyParser from 'body-parser';
// get path the file
import path from 'path';

const port = 4000;
const app = express();
app.use(bodyParser.urlencoded({extended:true}));


// open the html file
app.get("/",(req,res)=>{
    res.sendFile(path.resolve()+"/index.html");
});


// post the response to the client side

app.post("/",(req,res) => {
  var num1 = parseInt(req.body.num1);
  var num2 = parseInt(req.body.num2);
 var total = num1 + num2;
  res.send(`The total is ${total}`);


});


// app is running at port 4000
app.listen(port,()=>{
    console.log(`The app is running at port ${port}`);
});


