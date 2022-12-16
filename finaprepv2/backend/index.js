const express = require('express');
const port = 3000;
const app = express();

app.get('/',(req,res) => {
   res.send("Working");
});

app.get('/item',(req,res) => {
    res.send("Sending data");
})

app.get('/info',(req,res) => {
    let vegetable = req.params.vegetable;
    console.log("Vegetable are: ",vegetable);
    res.send('Got it');
});

app.listen(port,(req,res)=>{
    console.log(`Listening the app at ${port}`);
    console.log(req);
    console.log(res);
 });
