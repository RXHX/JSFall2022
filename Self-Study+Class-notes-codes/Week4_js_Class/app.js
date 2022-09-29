const express = require('express');
const app= express();

app.set('view engine','ejs');

app.get('/',(req,res) => {
   var today = new Date();
   var currentDay = today.getDay();

   var day = ' ';

   if(currentDay === 6 || currentDay === 0)
   {
    
   }
   

})