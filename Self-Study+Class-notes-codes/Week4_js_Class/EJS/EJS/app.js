const express = require('express');
const app = express();
app.set('view engine','ejs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const port = 3000;
app.get('/',(req,res)=>{
  var day = new Date();
  var today = day.getDay();
  var result = '';
   switch(today)
   {
     case 1:  result = 'Monday'; break;
     case 2:  result = 'Tuesday'; break;
     case 3:  result = 'Wednesday'; break;
     case 4:  result = 'Thursday'; break;
     case 5:  result = 'Friday'; break;
     case 6:  result = 'Saturday'; break;
     case 7:  result = 'Sunday'; break;
     default: break;
   }
   console.log("Today is"+result);


res.render('list',{kindOfDay : result});

});
app.listen(port,()=>{
    console.log(`The app is running at ${port}`);
});



