import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
const app = express();
const port = 3020;
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.sendFile(path.resolve()+"/index.html");
});

app.listen(port,(req,res) =>{
    console.log(`The app is running at port ${port}`);

})



