const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3010;
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','pug');

const colors = ["red","blue","green","yellow","orange"];
app.get('/',(req,res)=>{
    res.render('card',{ prompt:"Welcome Here!",colors});
});

app.listen(port,()=>{
    console.log(`The Port is runnning at ${port}`);
})
