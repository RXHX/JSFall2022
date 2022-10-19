const fs = require('fs');

async function getQuote()
{
     return  new Promise((resolve, reject) => {
        fs.readFile('data.json', 'utf8', (err, data) => {
          if (err) {
            reject(err);
          } else {
            const json = JSON.parse(data);
            resolve(json);
          }
        });
      });

}



async function getQuotes(id)
{
   const info = await getQuote();
   return info.records.find((obj) => obj.id == id);

}
module.exports={
    getQuote,
    getQuotes
}