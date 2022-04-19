// var http = require('http');
// var fs = require('fs');
// console.log('Server will listen at :  127.0.0.1:3000 ');
// http.createServer((req, res) => {
//     console.log("Port Number : 3000");
//     // Change the MIME type to application/pdf
//     res.writeHead(200, { "Content-Type": "text/html" });

//     fs.readFile('index.html', (error, data) => {
//         if (error) {
//             res.json({ 'status': 'error', msg: err });
//         } else {
//             res.write(data);
//             res.end();
//         }
//     });
// }).listen(3000);

//serve-mp4.js
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    console.log("Port Number : 3000");
    // change the MIME type to 'video/mp4'
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    fs.exists('video.mp4', function (exists) {
        if (exists) {
            var rstream = fs.createReadStream('video.mp4');
            rstream.pipe(res);
        }
        else {
            res.send("Its a 404");
            res.end();
        }
    });
}).listen(3000);