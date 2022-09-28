const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req, res){
    console.log(req.body);
    // var num1 = req.body.num1;
    // var num2 = req.body.num2;
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
  
    res.send("the result of this calculator is " + result);
  
} )

app.listen(3000, function(){
    console.log("server running on 3000");
})