var express = require('express');

app = express();

app.get('/', function(req, res) {
        res.sendFile(__dirname+"/index.html")
});

app.get('/:id', function(req, res) {

let    page = req.params;

console.log(page.id)
console.log(__dirname+"/"+page.id+".html")

res.sendFile(__dirname+"/"+page.id+".html")
})

app.listen(3000, function(){
    console.log("server running on 3000");
})