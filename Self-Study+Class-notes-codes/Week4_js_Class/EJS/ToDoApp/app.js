const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3050;
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


var listTitle = "Add Element";
var listItems = [];

app.get('/',(req,res) =>{
      res.render('list',   {
            listTitle: listTitle,
            listItems: listItems
      });
});

app.get('/work',(req,res) =>{
      res.render('list',{
            listTitle: listTitle,
            listItems: listItems
      });

    

})


app.post("/",function (req,res){
     console.log("Atleast");
     console.log(req.body);


  

});

app.listen(port,()=>{
   console.log(`The app is running at ${port}`);
});

