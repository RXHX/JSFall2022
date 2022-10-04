const express = require('express');
const port = 3050;
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.post('/',(req,res) =>{
     res.send(`<!DOCTYPE html>
     <head>
         <ttle>Cool</ttle>
     </head>
     <body>
     <form method ="post" action="/">
        <label>Name: </label>
        <input type="text" placeholder="type..." name="fname"></input><br/>
        <label>RollNo: </label>
        <input type="number" placeholder="type.." name="Rnum"></input><br/>
        <input type="submit"></input>
     </form>
     </form>
     
     </body>
     
     
     </html>`+req.body.fname+"\n"+req.body.Rnum)
});

app.listen(port,()=>{
   console.log(`App is listening at ${port}`) ;
});