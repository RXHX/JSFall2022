import express from 'express';
const port = 3000;
import bodyParser from 'body-parser';
// easy res and req fetching
const app = express();
// easy body parsing
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res) => {
     res.sendFile("C:/Users/duckd/OneDrive/Desktop/js/JSFall2022/Self-Study+Class-notes-codes/Week3_clss_JS/Calculator/index.html");
});

// app.post('/',(req,res) => {
//    console.log("Response:"+req.body);
//   var num1 = Number(req.body.num1);
//   var num2 =  Number(req.body.num2);
//  res.send("Hurray!",(num1+num2));
// });
app.listen(port,(req,res) => {
    console.log(`The app is running at ${port}`);
});



