const http = require('http');

const server = http.createServer(handler);

function handler(request, response) {
    response.writeHead(200, {
        "Content-Type": "application/json"
    });
    response.write("Done");
    response.end();
}
server.listen(8080);