const http = require('http');
const todo = {
    "Upcoming-task": "Do this",
    "Ongoing-task": "Do that",
    "copleted-task": "This and that"
};

const getJsonString = (obj) => JSON.stringify(obj, null, '  ');

const server = http.createServer(handler);

function handler(request, response) {
    if (request.url === '/todo') {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(getJsonString(todo));
    } else {
        response.writeHead(404);
        response.write('Not Found');
    }
    response.end();
}
server.listen(8080);