const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;
var add = []; 
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});



//var data= '';

// app.post('/',(req,res)=>{
//     add.push(req.body.name);
//     add.push(req.body.age);
   
//     for(var i=0;i<add.length;i++)
//     {
//         data += `${add[i]}<br>`;
//     }


//    res.send(`
//    <!DOCTYPE html>
// <head>
//     <title>Web Page</title>
// </head>
// <body>
// <form action="/" method="post">
// <label >Name:</label>   
// <input name="name" type="text"></input><br>
// <label>Age</label>
// <input name="age" type="number"></input><br>
// <input type="submit"></input>
// </form>
// ${data}
// </body>
// </html>`)
     
// });




app.listen(port,()=>{
    console.log(`The app is listening at ${port}`);
})