// api consumption using the Httpss



 // for doing the action on the response
 import https from'https';


 // get the api
 https.get('https://jsonplaceholder.typicode.com/todos/1',(response) =>{
 // very important step to consume the api   
 let body = ' ';
 // get data from the api   
 response.on("data",(data) =>{
    // add string to the data element
    body += data;
    // on the end
     response.on("end",()=>{
        // store it in the result
        var result =  JSON.parse(body);
        // log the statement
        console.log(result.id);       
    });
});

})
 












    // another api for the consumption

    

































