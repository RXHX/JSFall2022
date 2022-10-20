const express = require('express');
const app = express();
const bodyParser = require("body-parser");


app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
const port = 3000;

app.get('/',(req,res)=>{
   res.render('list',{});
});

app.post("/",(req,res) =>{
     const name = req.body.fname;
    

})
app.listen(port,()=>{
    console.log(`The app is running at ${port}`);
});