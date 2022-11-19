import express from 'express';
import parser from "body-parser";
import mongoose from "mongoose";
import pkg from 'mongoose';
import post from './post.js';

const { Schema } = pkg;

const app = express();

const port = process.env.PORT || 3000;

//use your own mongodb atlas username and password to replace user and pw below

const uri = "mongodb+srv://rohan:Water@information.ypywkx7.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once("open", () => {
 console.log('Mongodb connection established successfully')
})

const userSchema = new Schema({
 username: { type: String, required: true, index: { unique: true } }
});

const User = mongoose.model('user', userSchema);

app.use(parser.urlencoded({
 extended: false
}));

app.post('/', (req, res) => {
 const { username } = req.body;
 const newUser = new User({
 username: username
 });
 newUser.save(function (err, model) {
 return res.send(model);
 });
});


function getSpecificQuote(targetId)
{

    let searchedPost;
    for(var i=0;i<post.length;i++)
    {

     if(post[i].id == targetId)
     {
       searchedPost = post[i];
     }

    }
  // return the quote  
  return searchedPost;

}


// Reference : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
   return array;
}


app.get('/randomData',(req,res)=>{
    const Quote = shuffleArray(post);
    res.json(Quote);
});

app.get('/specificData',(req,res) => {
    const id = req.id;
    const searchedQuote = getSpecificQuote(id);
    res.json(searchedQuote);
});


app.listen(port, () => {
 console.log("starting server")
});

