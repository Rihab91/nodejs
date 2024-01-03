
// core model : create server : 
const http = require('http');
const server = http.createServer((req, res) => {
    // res.write()
    res.end('<h1>Hello Node!!!!</h1>\n')
}).listen(3000)