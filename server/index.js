const { fstat } = require('fs');
const http = require('http');
const file = require('./file');

const server = http.createServer();

server.on('request', (request, response) => {
    const data = [];

    request.on('data', (chunk) => {
        data.push(chunk);
    });
    request.on('end', () => {
        const bodyString = Buffer.concat(data).toString();
        request.body = bodyString.length ? JSON.parse(bodyString) : {};

        handler(request, response);
    });
})

function handler(request, response) {
    if (request.url === '/') {
        request.url = '/index.html';
    }
    if (!file.fileHandler(request, response)) {
        response.writeHead(404);
        response.write('Not Found');
    }

    response.end();
}

server.listen(8080);
