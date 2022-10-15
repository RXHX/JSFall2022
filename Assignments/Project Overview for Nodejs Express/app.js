const express= require('express');
const app = express();
const bodyParser = require('body-parser');
app.use('/static',express.static('public'));
app.set('view engine','pug');
const port = 3000;
var myName = "Rohan Kediyal";
app.get('/',(req,res)=>{
    res.render('layout',{myName});
});
app.listen(port,(req,res)=>{
    console.log(`The app is running at ${port}`);
});