import express from "express";
import bodyParser from "body-parser";
import path from "path";
const port = 3500;

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
console.log(path.resolve());
app.get("/",(req,res) =>{
     res.sendFile(path.resolve()+"/main.html");    
});

app.get("/:id",(req,res) =>{
   let page = req.params;
    console.log("Page: "+page);
   console.log("Page id: "+page.id);
 res.sendFile(path.resolve()+"/"+page.id+".html");
});

app.listen(port,() =>{
   console.log(` The Port on which it is running is ${port} and path is ${path.resolve()}`);
})

