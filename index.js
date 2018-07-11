var http = require('http');
var fs = require("fs");


http.createServer(function (request, response) {
    if (request.url === '/') {
        fs.readFile("./dist/index.html", function (err, data) {
            console.log('get connetion')

            if (err) {
                console.log('return respons code 404')
                response.writeHead(404);
                response.write("Not Found!");
            } else {
                console.log('return respons code 200')
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write(data);
            }
            response.end();
        });
    }
    else if (request.url === '/data/') {
        console.log('------->data')
        response.writeHead(200, { 'Content-Type': 'text/json' });
        let data = {
            name: 'Elena',
            position: 'CEO'
        }

        let json = JSON.stringify(data)
        response.write(json);
        response.end();

    } else {
        fs.readFile(`./dist/${request.url}`, function (err, data) {
            console.log('get connetion')
            const type = request.url.slice(request.url.lastIndexOf('.') + 1, );
            console.log('type: ', type)

            if (err) {
                console.log('return respons code 404')
                response.writeHead(404);
                response.write("Not Found!");
            } else {
                console.log('return respons code 200')
                response.writeHead(200, { 'Content-Type': `text/${type}` });
                response.write(data);
            }
            response.end();
        });
    }
}).listen(5000);
