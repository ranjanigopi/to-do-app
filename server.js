const http = require('http');

const getJsonString = (obj) => JSON.stringify(obj, null, '  ');

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
    response.end();
}

server.listen(8080);
