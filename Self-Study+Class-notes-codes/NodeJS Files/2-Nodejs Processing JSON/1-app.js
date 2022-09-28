const https = require('https');

function getQuote() {
  // simple get request
  const request = https.get(
    'https://animechan.vercel.app/api/random',
    // response will be used in the following callback
    (response) => {
      console.log(response.statusCode);
    }
  );
}

getQuote();
