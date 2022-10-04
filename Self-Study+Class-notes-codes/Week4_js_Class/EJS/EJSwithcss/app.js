// install express
const express = require('express');
// use app constant
const app = express();
// port
const port = 3000;
// use it start the engine
app.set('view engine','EJS');

// use it set the css 
app.use(express.static("public"));

// now make the app listen
app.listen(port,()=>{
    console.log(`The app is running at ${port}`);
});

// now get the request
app.get('/',(req,res) =>{
    var day = new Date();
    var today = day.getDay();
    var result = '';

    switch (today) {
           case 1:
              result='WeekDay';         
            break;
            case 2:
                result='WeekDay';
            break;
            case 3:
                result='WeekDay';
            break;
            case 4:
                result='WeekDay';
            break;
            case 5:
                result='WeekDay';
            break;
            case 6:
                result='WeekEnd';
            break;
            case 7:
                result='WeekEnd';
            break;
        default:
            break;
    }

    res.render('list',{kindOfDay:result});

});