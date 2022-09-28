
const fs = require('fs');

let rawdata = fs.readFileSync('file.json');
let test = JSON.parse(rawdata);
console.log(test);
console.log(test.name);

