const express= require('express');
const data = require('./data.json');
const app = express();
const bodyParser = require('body-parser');
const e = require('express');
app.use('/static',express.static('public'));
app.set('view engine','pug');
const port = 3000;


const information = JSON.parse(JSON.stringify(data));

const project = information.project;
const about = information.about;
const index = information.index;
const layout = information.layout;
const router = information.router;
const templatePage = information.constants;


// app.get(router.project,(req,res)=>{      
           
             
//     res.render(templatePage.project, {
//         projectname: project[i].project_name,
//         description:project[i].description,
//         technologies:project[i].technologies,
//         imageurls:project[i].image_urls
//     });

// });
 
var temp = "Hello";

  for(var i=0; i<project.length;i++)
  {
  
        app.get(router.project,(req,res)=>{      
              

           // if(i == project.length)
           // {
              //  console.log("Value of i is :"+i);
            //    res.end();
          //  }
          //  else{
                res.render(templatePage.project, {projectname: project[i].project_name,
                    description:project[i].description,
                    technologies:project[i].technologies,
                    imageurls:project[i].image_urls});
           // }
                
                }   
                );

    

      }


   
   
  
  

 

app.get(router.layout,(req,res)=>{
    res.render(templatePage.layout,{
        name: layout.user.name , 
        description1:layout.user.description1, 
        description2:layout.user.description2, 
        profilePic:layout.user.profilePic,
        url:router.about
    });
});

app.get(router.about,(req,res)=>{
    
    res.render(templatePage.about,{
        name:layout.user.name,
        title:about.resume.title,
        description1:layout.user.description1, 
        description2:layout.user.description2,
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

app.get(router.index,(req,res)=>{
    res.render(templatePage.index,{});
});


app.listen(port,(req,res)=>{
    console.log(`The app is running at ${port}`);
});