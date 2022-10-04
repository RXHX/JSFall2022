const express = require('express');

const port = 3000;
const app = express();

app.set('view engine','EJS');


app.get('/',(req,res)=>{

    var day = new Date();
    var today = day.getDay();
      res.render('list',{dayNum:today});
});

app.listen(port, () =>{
  console.log(`The app is listening at ${port}`);
}); 