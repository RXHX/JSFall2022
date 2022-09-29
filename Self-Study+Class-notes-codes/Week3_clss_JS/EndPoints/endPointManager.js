// api consumption using the Httpss

// 'https://animechan.vercel.app/api/quotes'
// 'https://jsonplaceholder.typicode.com/todos/1'

 // for doing the action on the response
 import https from'https';



 // get the api
 https.get('https://jsonplaceholder.typicode.com/todos/1',(response) =>{
 // very important step to consume the api   
 let body = ' ';
 // get data from the api   
 response.on("data",(data) =>{
    // add string to the data element
    body += data.toString();
    // on the end
     response.on("end",()=>{
        // store it in the result
        var result =  JSON.parse(body);
        // log the statement
        console.log(result);       
    });
});

});

   // another api for the consumption
//'https://animechan.vercel.app/api/quotes'

 
var i=0;
  https.get('https://animechan.vercel.app/api/quotes',(response) =>{
        let body = ' ';
        response.on("data",(data)=>{
            body += data.toString();
            response.on
            response.on("end",()=>{
                // for having data output only one time
                // if not do that it will print multiple times
                
               if(i==0)
               {
                let result = JSON.parse(body);
               for(var k=0;k<result.length;k++)
               { 
                   console.log("Anime:"+result[k].anime);    
               }
               i++;
               }     
            });
        });
        

       
  })


































