const express= require('express');
const app = express();
const port = 3000;
const record = require('./record');
app.get('/quote',async (req,res)=>{
   data =await record.getQuote();
   res.json(data);
});


app.get('/quote/:id',async (req,res)=>{
    data = await record.getQuotes(req.params.id);
    res.json(data);
    
});
app.listen(port,()=>{
    console.log(`App is listening at ${port}`);
})

