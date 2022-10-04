const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3040;
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('static',express.static("public"));


var listTitle = "Add Element";
var listItems = [];

app.get('/',(req,res) =>{
      res.render('list',   {
            listTitle: listTitle,
            listItems: listItems
      });
      console.log("on get",req.body);
});

app.get('/work',(req,res) =>{
      res.render('list',{
            listTitle: "Work",
            listItems: listItems
      });

    console.log('Here');

});
app.post("/",function(req,res){
     
   //   console.log(req.body.newTodo);
   listItems.push(req.body.newTodo);   
   if(req.body.listSubmit === "Work")
      {
            res.redirect('/work');       
            
      } 
      else{
            res.redirect('/');
      }
     

});

app.listen(port,()=>{
   console.log(`The app is running at ${port}`);
});

