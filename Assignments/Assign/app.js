const express= require('express');
const data = require('./data.json');
const app = express();
const bodyParser = require('body-parser');
app.use('/static',express.static('public'));
app.set('view engine','pug');
const port = 3000;


const information = JSON.parse(JSON.stringify(data));

const project = information.project;
const about = information.about;
const index = information.index;
const router = information.router;
const templatePage = information.constants;




function viewPost(info)
{
    console.log("Information is: "+info);
}


 app.get(router.project,(req,res)=>{
  res.render(templatePage.project,{
    project_name:project.project_name,
    description:project.description,
    technologies:project.technologies,
    image_urls:project.image_urls
  });
 });

app.get(router.index,(req,res)=>{
    res.render(templatePage.index,{
        name: index.user.name , 
        description1:index.user.description1, 
        description2:index.user.description2, 
        profilePic:index.user.profilePic,
        about:router.about,
        projectHeading:index.user.projectHeading,
        Portfolio:index.user.Portfolio,
        list:project,
        project:router.project

    });
});

app.get(router.about,(req,res)=>{
    
    res.render(templatePage.about,{
        name:index.user.name,
        title:about.resume.title,
        description1:index.user.description1, 
        description2:index.user.description2,
        generalDescription:about.resume.generalDescription,
        projectExperience:about.resume.projectExperience,
        valueAddonToOrganization:about.resume.valueAddonToOrganization,
        reactNative:about.resume.skills.reactNative,
        reactJS:about.resume.skills.reactJS,
        swift:about.resume.skills.swift,
        javascript:about.resume.skills.javascript,
        scm:about.resume.skills.scm,
        express:about.resume.skills.express,
        node:about.resume.skills.node,
        phoneNumber:about.resume.phoneNumber,
        email:about.resume.email,
        github:about.resume.socialMediaUrl.github,
        linkedln:about.resume.socialMediaUrl.linkedln,
        twitter:about.resume.socialMediaUrl.twitter
    });
});



app.listen(port,(req,res)=>{
    console.log(`The app is running at ${port}`);
   
   
});