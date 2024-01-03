
const fs = require('fs');

// Write to a file
fs.writeFileSync('welcome.txt', 'Hello Node');

fs.writeFile('welcome.txt', 'Hello Node',()=>{console.log("done")})
// Read from file : (utf8=toString())
// asynchrone (with callback function)
fs.readFile('hello.txt', 'utf8',(err,data)=>{console.log(data);});
