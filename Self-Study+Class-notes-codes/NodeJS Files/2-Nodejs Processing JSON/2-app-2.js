const https = require('https');

function getQuote() {
  // simple get request
  const request = https.get(
    'https://animechan.vercel.app/api/random',
    // response will be used in the following callback
    (response) => {
      let body = '';
      console.log(response.statusCode);

      // .on is a system event "data" is when the data response is received and it could be in batches
      response.on('data', (data) => {
        body += data;
        console.log(body);
        //using JSON.parse to convert JSON to a data structure
        console.log(JSON.parse(body));
      });

      // .on is a system event "end" is when the data response is finished
      response.on('end', () => {
        let sentence = JSON.parse(body);
        console.log(sentence);
      });
    }
  );
}

getQuote();
