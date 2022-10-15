const express= require('express');
const app = express();
const bodyParser = require('body-parser');
app.use('/static',express.static('public'));
app.set('view engine','pug');
const port = 3000;
var user = {
       "name":"Rohan Kediyal",
       "description1": "Ambitous",  
       "description2": "Punctual"
};
// rohan-kediyal-b608a11a1

var router = {
    "about":"/about"
};

var resume = {
     "title":"MERN Developer",
     "generalDescription":"Overall 3+ year of Experience in Service Based IT Company. Worked with clients such as NTUC, Symsung and MyDrugCost. Experience in all phases of mobile app development life cycle from Inception, design, development to stabilization and deployment. ",
     "projectExperience":` Worked on application Knocks which  is a collaboration software tool for Samsung which offers features like persistence chat room 
     (Channels), private groups and direct messaging. Workspace is a place where channels can be created, 
     members are added, audio/video files can be exchanged. Also on a multi-platform application which provides facilities to buy grocery online from your 
     nearest local store providing highest level of security during online transaction. It is one of the biggest 
     and trustworthy application in Singapore.`,
     "valueAddonToOrganization":"Having experience of working under clients across different continent, will help me in better understanding the work culture and becoming a team Player"
    ,"skills":{
        "reactNative":"ReactNative(0.66)",
        "reactJS":"ReactJS 16.14.0",
        "swift":"Swift4.0",
        "javascript":"Vanilla JavaScript",
        "scm":"Git",
        "express":"Express",
        "node":"Node 16.17.1"
    },
    "phoneNumber":"778-773-9163",
    "email":"rohan.kediyal@gmail.com",
    };
   
  var socialMediaUrl = {
      "github":"https://github.com/RXHX",
      "linkedln":"https://www.linkedin.com/in/rohan-kediyal-b608a11a1",
      "twitter":"https://twitter.com/RohanKediyal"
  }  
app.get('/',(req,res)=>{
    res.render('layout',{name: user.name , description1:user.description1, description2:user.description2, url:router.about});
});
app.get('/about',(req,res)=>{
    
    res.render('about',{
        name:user.name,
        title:resume.title,
        description1:user.description1, 
        description2:user.description2,
        generalDescription:resume.generalDescription,
        projectExperience:resume.projectExperience,
        valueAddonToOrganization:resume.valueAddonToOrganization,
        reactNative:resume.skills.reactNative,
        reactJS:resume.skills.reactJS,
        swift:resume.skills.swift,
        javascript:resume.skills.javascript,
        scm:resume.skills.scm,
        express:resume.skills.express,
        node:resume.skills.node,
        phoneNumber:resume.phoneNumber,
        email:resume.email,
        github:socialMediaUrl.github,
        linkedln:socialMediaUrl.linkedln,
        twitter:socialMediaUrl.twitter
    });
})
app.listen(port,(req,res)=>{
    console.log(`The app is running at ${port}`);
});