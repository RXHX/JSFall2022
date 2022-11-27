const router = require('express').Router();
const QuoteModel = require('../models/quoteList.model');
const post = require('../post');

var flag = true;







// insert
router.route('/initialInsert').get(async (req, res) => {
  
  if(flag)
  {
    var newActivity;
    for (var i = post.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = post[i];
    post[i] = post[j];
    post[j] = temp;
}


  for(var i=0;i<post.length;i++)
  {
  // create a new Activity object
   newActivity = new QuoteModel({
    quote : post[i].quote,
    source: post[i].source,
    citation:post[i].citation,
    image : post[i].image,
    year:post[i].year
  });

  // save the new object (newActivity)
  newActivity.save();
  }
  flag = false;
  }

  QuoteModel.find()
    .then((activities) => res.json(activities))
    .catch((err) => res.status(400).json('Error: ' + err));

  
});


// delete
router.route('/delete/:id').delete(async (req, res) => {
  console.log('delete logged');
  
await QuoteModel.findByIdAndDelete(req.params.id)
    .then(() => res.json('Activity deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
    
});


// update
router.route('/update/:id').post(async (req, res) => {
  console.log(req.params.id);
await  QuoteModel.findById(req.params.id)
    .then((activityforedit) => {
      activityforedit.activity = req.body.activity;

      activityforedit
        .save()
        .then(() => res.json('Activity updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});



module.exports = router;
