const http = require('http');
const file = require('./file');
const router = require('./router');

router.get('/birthday', function(request, response) {
    const now = new Date();
    if (now.getMonth() === 7 && now.getDate() === 3) {
        response.write('YES');
    } else {
        response.write('NO');
    }
});
router.get('/wedding-day', function(request, response) {
    const now = new Date();
    if (now.getMonth() === 8 && now.getDate() === 16) {
        response.write('YES');
    } else {
        response.write('NO');
    }
});

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
    if (!file.fileHandler(request, response) && !router.routeHandler(request, response)) {
        response.writeHead(404);
        response.write('Not Found');
    }

    response.end();
}

server.listen(8080);
