const https = require('https');

function getQuote() {
  // simple get request
  const request = https.get(
    'https://animechan.vercel.app/api/quotes',
    // response will be used in the following callback
    (response) => {
      // concatenate all streams into one object
      let body = '';
      // when data receive "data" event is emitted
      // that has an "on" method, with parameters "event" and "callback"
      response.on('data', (data) => {
        // toString converts the data stream to String
        body += data.toString();
        //along with data event there is "end" even
        // that emits when all data is reveive
        response.on('end', () => {
          console.log(body);
        });
      });
    }
  );
}

getQuote();
