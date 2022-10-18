const express= require('express');
const app = express();
const port = 3000;
app.use('/static',express.static('public'));
app.set('view engine','pug');


app.get('/',(req,res)=>{
    res.render('fun',{});

})
app.listen(port,(req,res)=>{
    console.log(`The app is running at ${port}`);
   
   
});
